import { Observable } from "rxjs";

export interface IUseCase<T, K>
{
    Execute(params : T) : Observable<K>
}