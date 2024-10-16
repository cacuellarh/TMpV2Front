import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmProductNotificationRequest } from '../../../domain/models/ConfirmProductNotificationRequest';
import { NotificationTypes } from '../../../domain/enums/NotificationTypes';

@Injectable({ providedIn: 'root' })
export class NotificationConfirmProductService {
  private valueRefSubject: BehaviorSubject<ConfirmProductNotificationRequest> =
    new BehaviorSubject<ConfirmProductNotificationRequest>({
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
    });

  private notificationTypeSubject: BehaviorSubject<NotificationTypes> =
    new BehaviorSubject<NotificationTypes>(NotificationTypes.None);

  SetProductValue(productDto: ConfirmProductNotificationRequest) {
    this.valueRefSubject.next(productDto);
  }

  GeProducDto$(): Observable<ConfirmProductNotificationRequest> {
    return this.valueRefSubject.asObservable();
  }

  OpenNotificationConfirmPrice() : void
  {
    this.notificationTypeSubject.next(NotificationTypes.StartScann)
  }
  CloseNotificationConfirmPrice()
  {
    this.notificationTypeSubject.next(NotificationTypes.None)
  }
  GetNotificationType$():Observable<NotificationTypes>
  {
    return this.notificationTypeSubject.asObservable();
  }
}
