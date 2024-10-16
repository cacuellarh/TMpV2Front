import { Injectable } from "@angular/core";
import { NotificationTypes } from "../../../domain/enums/NotificationTypes";
import { NotificationStatusService } from "../../services/notification/NotificationStatusService.service";

@Injectable
({
    providedIn:"root"
})
export class NotificationRegister
{
    private notificationsRegistersList! : Map<number, () => void>
    constructor(private notificationStatusService: NotificationStatusService)
    {
        this.notificationsRegistersList = new Map<number, () => void>(); 
        this.BuildRegisters()
    }
    
    private BuildRegisters()
    {
        this.notificationsRegistersList.set(100, () => {this.notificationStatusService.OpenNotificationType(NotificationTypes.StartScann)})
        this.notificationsRegistersList.set(501, () => {this.notificationStatusService.OpenNotificationType(NotificationTypes.Error501)})
        this.notificationsRegistersList.set(502, () => {this.notificationStatusService.OpenNotificationType(NotificationTypes.Error502)})
        this.notificationsRegistersList.set(503, () => {this.notificationStatusService.OpenNotificationType(NotificationTypes.Error503)})
        this.notificationsRegistersList.set(504, () => {this.notificationStatusService.OpenNotificationType(NotificationTypes.Error504)})
        
    }

    public GetNotificationRegisterEvent(notificationStatusCode : number)
    {
        if(this.notificationsRegistersList.has(notificationStatusCode))
        {
            return this.notificationsRegistersList.get(notificationStatusCode)
        }else {
            console.warn(`No se encontró un registro de notificación para el código: ${notificationStatusCode}`);
            return undefined;
        }

    }
}