import { Injectable } from "@angular/core";
import { ResultApiResponse } from "../../response/ResultApiResponse";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SubscriptionHandlerService {
  public subscribeToObservable(
    observable: Observable<ResultApiResponse>,
    onNext: (result: ResultApiResponse) => void,
    onError: (error: any) => void
  ): void {
    observable.subscribe({
      next: (result) => {
        onNext(result)
      },
      error: (err) => {
        console.error(err);
        onError(err);
      }
    });
  }
}