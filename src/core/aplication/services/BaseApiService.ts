import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseApiService } from '../contracts/repository/IBaseApiService';


@Injectable({
  providedIn: 'root',
})
export abstract class BaseApiService<T,K> implements IBaseApiService<T, K>{
  //private url : string = "http://localhost:5048/api"
  private url : string = "https://trackmyprice.co/api"

  constructor(
    private httpClient: HttpClient,
  ) {}

  Post(accion?: string): Observable<K> {
    return this.httpClient.get<K>(`${this.url}/${accion}`);
  }

  Get(accion?: string): Observable<K> {
    return this.httpClient.get<K>(`${this.url}/${accion}`);
  }
  Create(accion: string = "", entity : T): Observable<K> {
    return this.httpClient.post<K>(`${this.url}/${accion}`, entity);
  }

}
