import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // private config: any = {};

  // constructor(private http: HttpClient) {
  //   this.loadConfig();
  // }

  // private loadConfig() {
  //   this.http.get('/TMPFront/src/assets/config.json').pipe(
  //     map((config: any) => {
  //       this.config = config;
  //     }),
  //     catchError(() => {
  //       // Fallback config or handle error
  //       return of({});
  //     })
  //   ).subscribe();
  // }

  // get apiUrl(): string {
  //   return this.config.apiUrl || '';
  // }
}