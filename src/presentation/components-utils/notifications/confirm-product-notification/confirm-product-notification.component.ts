import { Component, Inject, Injectable } from '@angular/core';
import { NotificationConfirmProductService } from '../../../../core/aplication/services/notification/NotificationConfirmProductService.service';
import { ConfirmProductNotificationRequest } from '../../../../core/domain/models/ConfirmProductNotificationRequest';
import { catchError, of, Subscription, switchMap, tap } from 'rxjs';
import { ProdcutDto } from '../../../../core/domain/dto/ProductDto';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FORM_FACTORY } from '../../../../core/aplication/tokensInjectors/factory/TokenFactory';
import { FormFactoryImageTrack } from '../../../../core/aplication/factory/form/FormFactoryImageTrack';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFactoryForm } from '../../../../core/aplication/contracts/factory/IFormFactory';
import { IUseCase } from '../../../../core/aplication/contracts/useCase/IUseCase';
import { Result } from '../../../../core/aplication/response/Result';
import {
  USE_CASE_CREATE_ENTITY,
  USE_CASE_CREATE_IMAGE,
} from '../../../../core/aplication/tokensInjectors/useCase/TokenUseCase';
import { UseCaseCreateProduct } from '../../../../core/aplication/useCase/product/basic/UseCaseCreateProduct';
import { PRODUCT_REPOSITORY } from '../../../../core/aplication/tokensInjectors/repository/TokenRepository';
import { ProductRepository } from '../../../../infraestructure/repository/ProductRepository';
import { CreateImageTrackRequest } from '../../../../core/aplication/persistence/request/CreateImageTrackRequest';
import { UseCaseCreateImageTrack } from '../../../../core/aplication/useCase/imageTrack/basic/UseCaseCreateImageTrack';
import { ImageTrack } from '../../../../core/domain/Entities/ImageTrack';
import { CreateProductAndImageTrackHandler } from '../../../../core/aplication/handle/components/CreateProductAndImageTrackHandler';
import { IMAGE_TRACK_SERVICE, PRODUCT_SERVICE } from '../../../../core/aplication/tokensInjectors/services/ServicesTokens';
import { ImageTrackService } from '../../../../core/aplication/services/ImageTrackService.service';
import { ProductService } from '../../../../core/aplication/services/ProductService.service';
import { LoaderService } from '../../../../core/aplication/services/loader/loaderServices.service';
import { NotificationStatusService } from '../../../../core/aplication/services/notification/NotificationStatusService.service';
import { NotificationTypes } from '../../../../core/domain/enums/NotificationTypes';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-confirm-product-notification',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './confirm-product-notification.component.html',
  styleUrl: './confirm-product-notification.component.css',
  providers: [
    { provide: FORM_FACTORY, useClass: FormFactoryImageTrack },
    { provide: USE_CASE_CREATE_ENTITY, useClass: UseCaseCreateProduct },
    { provide: USE_CASE_CREATE_IMAGE, useClass: UseCaseCreateImageTrack },
    { provide: PRODUCT_REPOSITORY, useClass: ProductRepository },
    {provide: IMAGE_TRACK_SERVICE, useClass : ImageTrackService},
    {provide: PRODUCT_SERVICE, useClass : ProductService}
  ],
})
export class ConfirmProductNotificationComponent {
  public valueRef: ConfirmProductNotificationRequest = {
    value: {
      descripcion: '',
      precio: '',
      descuento: '',
      tipoMoneda: '',
      operationStatusCode : 0,
      filePath : ''
    },
    url: '',
  };
  public formImageTrack!: FormGroup;
  public subscription!: Subscription;
  public formSubmitted = false;
  constructor(
    private confirmProductService: NotificationConfirmProductService,
    @Inject(FORM_FACTORY) private factory: IFactoryForm,
    @Inject(USE_CASE_CREATE_ENTITY)
    private useCaseCreateProduct: IUseCase<ProdcutDto, Result<ProdcutDto>>,
    @Inject(USE_CASE_CREATE_IMAGE)
    private useCaseCreateImage: IUseCase<
      CreateImageTrackRequest,
      Result<ImageTrack>
    >,
    private createProductAndImageTrackHandler: CreateProductAndImageTrackHandler,
    @Inject(IMAGE_TRACK_SERVICE) private ImageTrackService : ImageTrackService,
    @Inject(PRODUCT_SERVICE) private productService : ProductService,
    private loaderService : LoaderService,
    private notificationService: NotificationStatusService
  ) {
    this.formImageTrack = factory.CreateForm();
  }

  ngOnInit() {
    this.subscription = this.confirmProductService
      .GeProducDto$()
      .subscribe((product: ConfirmProductNotificationRequest) => {
        this.valueRef = product;
      });
  }

  create() {
    this.formSubmitted = true
    this.loaderService.ShowLoader();
    this.productService.CreateProduct(this.valueRef.value)
      .subscribe((res:Result<ProdcutDto>) =>
      {
        const request: CreateImageTrackRequest = {
          ProductId: res.value.id as number,
          Value: this.formImageTrack.value,
        }
        this.formImageTrack.value.url = this.valueRef.url
        this.ImageTrackService.CreateImageTrack(request)
        .subscribe(res =>
        {
          console.log(res)
          this.loaderService.HideLoader();
          this.notificationService.OpenNotificationType(NotificationTypes.SuccessScann);
        }
        )
      })
    
  }
}
