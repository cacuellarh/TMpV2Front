import { ImageTrack } from "../../../domain/Entities/ImageTrack"

export interface CreateImageTrackRequest
{
    ProductId: number
    Value : ImageTrack
}