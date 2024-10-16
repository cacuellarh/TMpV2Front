import { InjectionToken } from "@angular/core";
import { ImageTrackService } from "../../services/ImageTrackService.service";
import { ProductService } from "../../services/ProductService.service";

export const IMAGE_TRACK_SERVICE = new InjectionToken<ImageTrackService>('IMAGE_TRACK_SERVICE');
export const PRODUCT_SERVICE = new InjectionToken<ProductService>('IMAGE_TRACK_SERVICE');
