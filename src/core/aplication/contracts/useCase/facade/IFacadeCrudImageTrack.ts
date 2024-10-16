import { Observable } from "rxjs";
import { ImageTrack } from "../../../../domain/Entities/ImageTrack";
import { ApiResponse } from "../../../response/ApiResponse";

export interface IFacadeCrudImageTrack
{
    CreateImageTrack(image : ImageTrack) : Promise<ApiResponse>
    GetImageTrack() : Observable<ApiResponse>
}