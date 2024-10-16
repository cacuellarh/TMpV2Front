import { Observable } from "rxjs";
import { Result } from "../response/Result";
import { PRODUCT_REPOSITORY } from "../tokensInjectors/repository/TokenRepository";
import { Inject, Injectable } from "@angular/core";
import { IProductRepository } from "../contracts/repository/IProductRepository";
import { ProdcutDto } from "../../domain/dto/ProductDto";

@Injectable({
    providedIn:"root"
})

export class ProductService
{
    constructor(@Inject(PRODUCT_REPOSITORY) private repository : IProductRepository){}

    CreateProduct(params: ProdcutDto): Observable<Result<ProdcutDto>> {
        return this.repository.Create("Product",params)
    }
}