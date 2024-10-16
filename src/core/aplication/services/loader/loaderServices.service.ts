import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, interval, map, Observable, of, Subject, switchMap, take, takeUntil } from 'rxjs';
import { LoaderType } from '../../commons/types/loaderType';


@Injectable({ providedIn: 'root' })
export class LoaderService{
  private loaderSubject = new BehaviorSubject<boolean>(false);
  
  public ShowLoader(duration?: number) {
    this.loaderSubject.next(true);
  }

  public HideLoader() {
    this.loaderSubject.next(false);
  }

  getLoaderState$(): Observable<boolean> {
    return this.loaderSubject.asObservable();
  }




}
