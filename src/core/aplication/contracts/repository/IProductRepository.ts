
import { ProdcutDto } from "../../../domain/dto/ProductDto";
import { Result } from "../../response/Result";
import { BaseApiService } from "../../services/BaseApiService";

export interface IProductRepository extends BaseApiService<ProdcutDto,  Result<ProdcutDto>>
{
    
}