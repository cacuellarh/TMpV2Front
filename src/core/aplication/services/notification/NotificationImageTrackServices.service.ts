import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class NotificationImageTrackServices
{
    private notificationSubject : BehaviorSubject<boolean> = new BehaviorSubject(false)

    ShowNotification() : void
    {
        this.notificationSubject.next(true)
    }

    HideNotification() : void
    {
        this.notificationSubject.next(false)
    }
    
    GetNotificationStatus$() : Observable<boolean>
    {
        return this.notificationSubject.asObservable()
    }
}