import { Observable } from "rxjs";
import { Result } from "../response/Result";
import { CreateImageTrackRequest } from "../persistence/request/CreateImageTrackRequest";
import { IMAGE_REPOSITORY } from "../tokensInjectors/repository/TokenRepository";
import { IImageTrackRepository } from "../contracts/repository/IImageTrackRepository";
import { Inject, Injectable } from "@angular/core";
import { ImageTrack } from "../../domain/Entities/ImageTrack";

@Injectable({
    providedIn:"root"
})

export class ImageTrackService
{
    constructor(@Inject(IMAGE_REPOSITORY) private repository : IImageTrackRepository){}
    
    CreateImageTrack(params: CreateImageTrackRequest): Observable<Result<ImageTrack>> {

        return this.repository.Create("imageTrack",params)
    }
}