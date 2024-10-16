import { Observable } from 'rxjs';
import { BaseEntity } from '../../../domain/base/BaseEntity';

export interface IBaseApiService<T, K> {
  Get(accion: string): Observable<K>;
  Create(accion: string, entity: T): Observable<K>;
}
