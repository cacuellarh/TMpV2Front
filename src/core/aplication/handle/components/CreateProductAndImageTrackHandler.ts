import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, switchMap, take, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ConfirmProductNotificationRequest } from '../../../domain/models/ConfirmProductNotificationRequest';
import { CreateImageTrackRequest } from '../../persistence/request/CreateImageTrackRequest';
import { IUseCase } from '../../contracts/useCase/IUseCase';
import { ProdcutDto } from '../../../domain/dto/ProductDto';
import { Result } from '../../response/Result';
import { ImageTrack } from '../../../domain/Entities/ImageTrack';
import { LoaderService } from '../../services/loader/loaderServices.service';
import { NotificationStatusService } from '../../services/notification/NotificationStatusService.service';
import { NotificationTypes } from '../../../domain/enums/NotificationTypes';

@Injectable({
  providedIn: 'root',
})
export class CreateProductAndImageTrackHandler {
  constructor(
    private loaderService: LoaderService,
    private notificationService: NotificationStatusService
  ) {}

  execute(
    valueRef: ConfirmProductNotificationRequest,
    formImageTrack: FormGroup,
    useCaseCreateProduct: IUseCase<ProdcutDto, Result<ProdcutDto>>,
    useCaseCreateImage: IUseCase<CreateImageTrackRequest, Result<ImageTrack>>
  ) {
    if (formImageTrack.valid) {
      // Cerrar notificaciones previas
      this.notificationService.CloseNotificationType();
      this.loaderService.ShowLoader();
      // Manejo del flujo completo dentro de un solo observable
      useCaseCreateProduct.Execute(valueRef.value).pipe(
        // Usamos shareReplay para que la emisión se comparta entre los operadores si es necesario
        shareReplay(1),
        tap((res) => {
          // Actualizar el formulario con la URL proporcionada
          formImageTrack.patchValue({ url: valueRef.url });
        }),
        // Encadenamos la creación del producto con la creación de la imagen
        switchMap((res) => {
          const request: CreateImageTrackRequest = {
            ProductId: res.value.id as number,
            Value: formImageTrack.value,
          };
          return useCaseCreateImage.Execute(request);
        }),
        // Manejar el resultado final de la creación de imagen
        tap((result: Result<ImageTrack>) => {
          if (result.isSuccess) {
            // Mostrar notificación de éxito
            this.notificationService.OpenNotificationType(NotificationTypes.SuccessScann);

            // Resetear el formulario después de éxito
            formImageTrack.reset();
            this.loaderService.HideLoader();
          }
        }),

        // Solo tomamos una emisión
        take(1)
      ).subscribe(); // Nos suscribimos para ejecutar el flujo
    }
  }
}

