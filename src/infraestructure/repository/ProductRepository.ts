import { Injectable } from "@angular/core";
import { IProductRepository } from "../../core/aplication/contracts/repository/IProductRepository";
import { BaseApiService } from "../../core/aplication/services/BaseApiService";
import { Result } from "../../core/aplication/response/Result";
import { ProdcutDto } from "../../core/domain/dto/ProductDto";

@Injectable({
    providedIn: 'root',
  })
export class ProductRepository extends BaseApiService<ProdcutDto, Result<ProdcutDto>> implements IProductRepository
{

}