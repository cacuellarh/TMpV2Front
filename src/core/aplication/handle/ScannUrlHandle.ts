import { Observable } from 'rxjs';
import { ResultApiResponse } from '../response/ResultApiResponse';
import { Injectable } from '@angular/core';
import { Result } from '../response/Result';
import { SubscriptionHandlerService } from './subscriptions/SubscriptionHandlerResponse';
import { ResultHandlerService } from './result/handleApiResponse';
import { NotificationHandlerService } from './notifications/NotificationHandlerService';
import { LoaderService } from '../services/loader/loaderServices.service';
@Injectable({ providedIn: 'root' })
export class ScannUrlHandle {
  constructor(
    private subscriptionHanlderService: SubscriptionHandlerService,
    private resultHandler: ResultHandlerService,
    private notificationHandlerService: NotificationHandlerService,
    private loaderService: LoaderService
  ) {}
  public AsyncOperation(
    callBackObservable: Observable<ResultApiResponse>,
    valueRef: { value: any }
  ): Promise<Result<boolean>> {
    return new Promise((resolve, reject) => {
      this.subscriptionHanlderService.subscribeToObservable(
        callBackObservable,
        (result: ResultApiResponse) => {
          const apiSuccess = this.resultHandler.handleApiResponse(result,valueRef)
          console.log(apiSuccess)
          if(apiSuccess.isSuccess)
          {
            this.notificationHandlerService.handleNotification(apiSuccess.value.operationStatusCode)
            resolve(Result.Success<boolean>(true))
          }else
          {
            reject(Result.Failure<boolean>(apiSuccess.errorMessage, apiSuccess.codeError))
          }
          this.loaderService.HideLoader();
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
