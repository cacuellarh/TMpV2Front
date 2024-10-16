import { InjectionToken } from "@angular/core";
import { IImageTrackRepository } from "../../contracts/repository/IImageTrackRepository";
import { IChatGptScanImageRepository } from "../../contracts/repository/IChatGptScanImageRepository";
import { IProductRepository } from "../../contracts/repository/IProductRepository";

export const IMAGE_REPOSITORY = new InjectionToken<IImageTrackRepository>('IMAGE_REPOSITORY');
export const CHATGPT_REPOSITORY = new InjectionToken<IChatGptScanImageRepository>('CHATGPT_REPOSITORY');
export const PRODUCT_REPOSITORY = new InjectionToken<IProductRepository>('PRODUCT_REPOSITORY');