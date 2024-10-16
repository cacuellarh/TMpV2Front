import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationTypes } from '../../../domain/enums/NotificationTypes';

@Injectable({ providedIn: 'root' })
export class NotificationStatusService {

  private notificationTypeSubject: BehaviorSubject<NotificationTypes> =
    new BehaviorSubject<NotificationTypes>(NotificationTypes.None);

  OpenNotificationType(notificationType : NotificationTypes) : void
  {
    this.notificationTypeSubject.next(notificationType)
  }
  CloseNotificationType()
  {
    this.notificationTypeSubject.next(NotificationTypes.None)
  }
  GetNotificationType$():Observable<NotificationTypes>
  {
    return this.notificationTypeSubject.asObservable();
  }

}
