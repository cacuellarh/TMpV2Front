import { Observable } from 'rxjs';
import { IUseCase } from '../../../contracts/useCase/IUseCase';
import { Inject, Injectable } from '@angular/core';
import { CHATGPT_REPOSITORY } from '../../../tokensInjectors/repository/TokenRepository';
import { IChatGptScanImageRepository } from '../../../contracts/repository/IChatGptScanImageRepository';
import { Result } from '../../../response/Result';
import { ProdcutDto } from '../../../../domain/dto/ProductDto';
import { ResultApiResponse } from '../../../response/ResultApiResponse';

@Injectable({
    providedIn: 'root',
  })
export class UseCaseChatGptScannImageToProduct
  implements IUseCase<string,ResultApiResponse>
{
  constructor(
    @Inject(CHATGPT_REPOSITORY) private repository: IChatGptScanImageRepository
  ) {}
  Execute(params: string): Observable<ResultApiResponse> {
    return this.repository.ScannImageToProductDto(params);
  }
}
