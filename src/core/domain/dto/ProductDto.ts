import { BaseEntity } from "../base/BaseEntity"

export interface ProdcutDto extends BaseEntity
{
    descripcion? : string
    precio? : string
    precioOriginal? : string
    descuento? : string
    tipoMoneda? : string
    operationStatusCode : number
    domainUrl? : string
    filePath : string
}