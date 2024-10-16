import { BaseEntity } from "../base/BaseEntity";
import { Product } from "./Product";

export interface ImageTrack extends BaseEntity
{
    email : string,
    url : string,
    product : Product
}