import { Observable } from "rxjs";
import { IUseCase } from "../../../contracts/useCase/IUseCase";
import { Result } from "../../../response/Result";
import { Inject, Injectable } from "@angular/core";
import { IProductRepository } from "../../../contracts/repository/IProductRepository";
import { PRODUCT_REPOSITORY } from "../../../tokensInjectors/repository/TokenRepository";
import { ProdcutDto } from "../../../../domain/dto/ProductDto";

@Injectable({
    providedIn: 'root'
  })
  
export class UseCaseCreateProduct implements IUseCase<ProdcutDto, Result<ProdcutDto>>
{
    constructor(@Inject(PRODUCT_REPOSITORY) private repository : IProductRepository){}

    Execute(params: ProdcutDto): Observable<Result<ProdcutDto>> {
        return this.repository.Create("Product",params)
    }
    
}