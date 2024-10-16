import { NotificationStatusService } from "../../core/aplication/services/notification/NotificationStatusService.service";

export abstract class CloseNotificationAbc
{
    constructor(private notificationService : NotificationStatusService){}

    closeNotification()
    {
        this.notificationService.CloseNotificationType()
    }
}