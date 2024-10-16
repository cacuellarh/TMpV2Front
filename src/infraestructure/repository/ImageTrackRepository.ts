import { Injectable } from '@angular/core';
import { IImageTrackRepository } from '../../core/aplication/contracts/repository/IImageTrackRepository';
import { BaseApiService } from '../../core/aplication/services/BaseApiService';
import { ImageTrack } from '../../core/domain/Entities/ImageTrack';
import { Result } from '../../core/aplication/response/Result';
import { CreateImageTrackRequest } from '../../core/aplication/persistence/request/CreateImageTrackRequest';

@Injectable({
  providedIn: 'root',
})
export class ImageTrackRepository
  extends BaseApiService<CreateImageTrackRequest, Result<ImageTrack>>
  implements IImageTrackRepository {}
