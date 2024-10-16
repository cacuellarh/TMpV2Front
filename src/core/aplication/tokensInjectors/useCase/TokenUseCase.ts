import { InjectionToken } from "@angular/core";
import { BaseEntity } from "../../../domain/base/BaseEntity";
import { IUseCase } from "../../contracts/useCase/IUseCase";
import { ApiResponse } from "../../response/ApiResponse";
import { Observable } from "rxjs";
import { ResultApiResponse } from "../../response/ResultApiResponse";
import { ProdcutDto } from "../../../domain/dto/ProductDto";
import { Result } from "../../response/Result";
import { CreateImageTrackRequest } from "../../persistence/request/CreateImageTrackRequest";
import { ImageTrack } from "../../../domain/Entities/ImageTrack";

export const USE_CASE_CREATE = new InjectionToken<IUseCase<BaseEntity,ApiResponse>>('USE_CASE_CREATE');
export const USE_CASE_SCANN_IMAGE = new InjectionToken<IUseCase<BaseEntity,ResultApiResponse>>('USE_CASE_SCANN_IMAGE');
export const USE_CASE_CREATE_ENTITY = new InjectionToken<IUseCase<BaseEntity, Result<BaseEntity>>>('USE_CASE_CREATE_ENTITY');

export const USE_CASE_CREATE_IMAGE = new InjectionToken<IUseCase<CreateImageTrackRequest, Result<ImageTrack>>>('USE_CASE_CREATE_IMAGE');