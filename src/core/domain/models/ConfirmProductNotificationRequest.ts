import { ProdcutDto } from "../dto/ProductDto";

export interface ConfirmProductNotificationRequest
{
    value : ProdcutDto,
    url : string,
}