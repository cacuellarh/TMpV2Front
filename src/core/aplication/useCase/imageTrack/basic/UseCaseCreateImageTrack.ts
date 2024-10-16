import { Inject, Injectable } from "@angular/core";
import { ImageTrack } from "../../../../domain/Entities/ImageTrack";
import { IUseCase } from "../../../contracts/useCase/IUseCase";
import { IMAGE_REPOSITORY } from "../../../tokensInjectors/repository/TokenRepository";
import { IImageTrackRepository } from "../../../contracts/repository/IImageTrackRepository";
import { Observable } from "rxjs";
import { Result } from "../../../response/Result";
import { CreateImageTrackRequest } from "../../../persistence/request/CreateImageTrackRequest";

@Injectable({
    providedIn:"root"
})
export class UseCaseCreateImageTrack implements IUseCase<CreateImageTrackRequest,Result<ImageTrack>>
{
    constructor(@Inject(IMAGE_REPOSITORY) private repository : IImageTrackRepository)
    {}
    Execute(params: CreateImageTrackRequest): Observable<Result<ImageTrack>> {

        return this.repository.Create("imageTrack",params)
    }

}