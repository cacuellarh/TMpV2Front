import { InjectionToken } from "@angular/core";
import { IFacadeCrudImageTrack } from "../../contracts/useCase/facade/IFacadeCrudImageTrack";

export const FACADE_IMAGETRACK = new InjectionToken<IFacadeCrudImageTrack>('FACADE_IMAGETRACK');