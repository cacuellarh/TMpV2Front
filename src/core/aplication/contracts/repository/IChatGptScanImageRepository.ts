import { Observable } from "rxjs";
import { ResultApiResponse } from "../../response/ResultApiResponse";


export interface IChatGptScanImageRepository
{
    ScannImageToProductDto(url : string) : Observable<ResultApiResponse>
}