import { Injectable } from "@angular/core";
import { ProdcutDto } from "../../../domain/dto/ProductDto";
import { Result } from "../../response/Result";
import { ResultApiResponse } from "../../response/ResultApiResponse";

@Injectable({ providedIn: 'root' })
export class ResultHandlerService {
  public handleApiResponse(result: ResultApiResponse, valueRef: {value : any}): Result<ProdcutDto> {
    const productDto = result.value as ProdcutDto;
    if (result.isSuccess && result.value != null) {
      valueRef.value = result.value
      return Result.Success<ProdcutDto>(productDto);
    } else {
      return Result.Failure<ProdcutDto>(
        `La operacion no se completó, Api error : ${result.errorMessage}`,
        productDto.operationStatusCode
      );
    }
  }
}