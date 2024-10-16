import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FORM_FACTORY } from '../../../../core/aplication/tokensInjectors/factory/TokenFactory';
import { FormFactoryImageTrack } from '../../../../core/aplication/factory/form/FormFactoryImageTrack';
import { IFactoryForm } from '../../../../core/aplication/contracts/factory/IFormFactory';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  CHATGPT_REPOSITORY,
  IMAGE_REPOSITORY,
} from '../../../../core/aplication/tokensInjectors/repository/TokenRepository';
import { ImageTrackRepository } from '../../../../infraestructure/repository/ImageTrackRepository';
import { CreateImageNotificationComponent } from '../../../components-utils/notifications/create-image-notification/create-image-notification.component';
import { NotificationImageTrackServices } from '../../../../core/aplication/services/notification/NotificationImageTrackServices.service';
import { USE_CASE_SCANN_IMAGE } from '../../../../core/aplication/tokensInjectors/useCase/TokenUseCase';
import { UseCaseChatGptScannImageToProduct } from '../../../../core/aplication/useCase/chatGpt/bussines/UseCaseChatGptScannImageToProduct';
import { IUseCase } from '../../../../core/aplication/contracts/useCase/IUseCase';
import { ChatGptScanImageRepository } from '../../../../infraestructure/repository/ChatGptScanImageRepository';
import { ResultApiResponse } from '../../../../core/aplication/response/ResultApiResponse';
import { NotificationTypes } from '../../../../core/domain/enums/NotificationTypes';
import { ScannUrlHandle } from '../../../../core/aplication/handle/ScannUrlHandle';
import { NotificationConfirmProductService } from '../../../../core/aplication/services/notification/NotificationConfirmProductService.service';
import { ConfirmProductNotificationRequest } from '../../../../core/domain/models/ConfirmProductNotificationRequest';
import { ConfirmProductNotificationComponent } from '../../../components-utils/notifications/confirm-product-notification/confirm-product-notification.component';
import { LoaderService } from '../../../../core/aplication/services/loader/loaderServices.service';
import { LoaderComponent } from '../../../components-utils/loader/loader.component';
import { NotificationStatusService } from '../../../../core/aplication/services/notification/NotificationStatusService.service';
import { MoreThanOneProductComponent } from "../../../components-utils/notifications/errors/more-than-one-product/more-than-one-product.component";
import { AdvertisingOnImageComponent } from "../../../components-utils/notifications/errors/advertising-on-image/advertising-on-image.component";
import { IsNotEcommerceComponent } from "../../../components-utils/notifications/errors/is-not-ecommerce/is-not-ecommerce.component";
import { PricelessProductComponent } from "../../../components-utils/notifications/errors/priceless-product/priceless-product.component";
import { ErrorBaseComponent } from "../../../commons/error-base/error-base.component";
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    CreateImageNotificationComponent,
    ConfirmProductNotificationComponent,
    LoaderComponent,
    MoreThanOneProductComponent,
    AdvertisingOnImageComponent,
    IsNotEcommerceComponent,
    PricelessProductComponent,
    ErrorBaseComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [
    {
      provide: USE_CASE_SCANN_IMAGE,
      useClass: UseCaseChatGptScannImageToProduct,
    },
    { provide: IMAGE_REPOSITORY, useClass: ImageTrackRepository },
    { provide: CHATGPT_REPOSITORY, useClass: ChatGptScanImageRepository },
  ],
})
export class MainComponent {
  public time : number = 0
  public isLoading: boolean = false;
  public isCreated!: boolean;
  public valueRef: ConfirmProductNotificationRequest = {
    value: {
      descripcion: '',
      precio: '',
      descuento: '',
      precioOriginal: '',
      tipoMoneda: '',
      operationStatusCode : 0,
      filePath : ''
    },
    url: '',
  };
  public notificationRef!: NotificationTypes
  constructor(
    @Inject(USE_CASE_SCANN_IMAGE)
    private useCaseScannImage: IUseCase<string, ResultApiResponse>,
    private notificationService: NotificationImageTrackServices,
    private confirmProductNotificationService: NotificationConfirmProductService,
    private loaderService: LoaderService,
    private notificationStatusService: NotificationStatusService,
    private scannUrlHandler : ScannUrlHandle
  ) {}
  ngOnInit() {
    this.notificationService
      .GetNotificationStatus$()
      .subscribe((status: boolean) => {
        this.isCreated = status;
      });

    this.loaderService.getLoaderState$().subscribe((state: boolean) => {
      this.isLoading = state;
    });
    this.notificationStatusService
      .GetNotificationType$()
      .subscribe((notificationType: NotificationTypes) => {
        this.notificationRef = notificationType;
      });
  }

  async scannUrl(urlInput: HTMLInputElement) {

    const scanObservable = this.useCaseScannImage.Execute(urlInput.value)
      .pipe(shareReplay(1))

    this.loaderService.ShowLoader();
    await this.scannUrlHandler.AsyncOperation(
      scanObservable,
      this.valueRef,
    )
    this.valueRef.url = urlInput.value;
    this.confirmProductNotificationService.SetProductValue(this.valueRef);
    urlInput.value = "";
  }

  public setupMenuClose(): void {
    document.addEventListener('click', (event) => {
      const menuContainer = document.querySelector('.menu_container');
      const menuToggle = document.querySelector('.menu_toggle');

      if (menuContainer && menuToggle) {
        
        // Verificar si el clic no ocurrió dentro de .menu_container o .menu_toggle
        if (!menuContainer.contains(event.target as Node) && !menuToggle.contains(event.target as Node)) {
          // Quitar la clase 'menu_container_move' si está presente
          menuContainer.classList.remove('menu_container_move');
          // Quitar la clase 'active' del botón de alternancia de menú si está presente
          menuToggle.classList.remove('active');
        }
      }
    });
  }
}
