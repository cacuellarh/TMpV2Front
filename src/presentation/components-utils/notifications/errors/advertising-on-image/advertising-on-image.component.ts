import { Component } from '@angular/core';
import { ErrorBaseComponent } from "../../../../commons/error-base/error-base.component";
import { CloseNotificationAbc } from '../../../../commonsServices/CloseNotificationAbc';
import { NotificationStatusService } from '../../../../../core/aplication/services/notification/NotificationStatusService.service';

@Component({
  selector: 'app-advertising-on-image',
  standalone: true,
  imports: [ErrorBaseComponent],
  templateUrl: './advertising-on-image.component.html',
  styleUrl: './advertising-on-image.component.css'
})
export class AdvertisingOnImageComponent{

  public details : string = "Se ha detectado un aviso de cookies, publicidad u otro elemento que bloquea la visualización del producto y su precio."

}
