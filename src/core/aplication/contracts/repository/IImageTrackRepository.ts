import { ImageTrack } from "../../../domain/Entities/ImageTrack";
import { CreateImageTrackRequest } from "../../persistence/request/CreateImageTrackRequest";
import { Result } from "../../response/Result";
import { BaseApiService } from "../../services/BaseApiService";


export interface IImageTrackRepository extends BaseApiService<CreateImageTrackRequest, Result<ImageTrack>>
{}