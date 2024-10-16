import { Injectable } from "@angular/core";
import { NotificationRegister } from "../../utils/notification/NotificationRegister";

@Injectable({ providedIn: 'root' })
export class NotificationHandlerService {
  constructor(private notificationRegister: NotificationRegister) {}

  public handleNotification(statusOperation: number): void {
    const notificationStatusHandler = this.notificationRegister.GetNotificationRegisterEvent(statusOperation);
    if (notificationStatusHandler) {
      notificationStatusHandler();
    }
  }
}