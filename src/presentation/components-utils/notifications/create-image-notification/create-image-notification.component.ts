import { Component } from '@angular/core';
import { NotificationImageTrackServices } from '../../../../core/aplication/services/notification/NotificationImageTrackServices.service';
import { RouterLink } from '@angular/router';
import { NotificationStatusService } from '../../../../core/aplication/services/notification/NotificationStatusService.service';

@Component({
  selector: 'app-create-image-notification',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create-image-notification.component.html',
  styleUrl: './create-image-notification.component.css'
})
export class CreateImageNotificationComponent {
  constructor(private notificationService : NotificationStatusService){}
  closeModal()
  {
    this.notificationService.CloseNotificationType()
  }
}
