import { Component, Input, input } from '@angular/core';
import { CloseNotificationAbc } from '../../commonsServices/CloseNotificationAbc';
import { NotificationStatusService } from '../../../core/aplication/services/notification/NotificationStatusService.service';

@Component({
  selector: 'app-error-base',
  standalone: true,
  imports: [],
  templateUrl: './error-base.component.html',
  styleUrl: './error-base.component.css'
})
export class ErrorBaseComponent extends CloseNotificationAbc {
  @Input() errorCode : number = 0
  @Input() detailsError : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, at. Corporis velit, consectetur magni deleniti corrupti praesentium voluptates earum vero possimus odio eligendi facere voluptatem eaque, non et, obcaecati commodi?"

  constructor(private notificationService_ : NotificationStatusService)
  {
    super(notificationService_)
  }

  close()
  {
    this.closeNotification()
  }
}

