import { Observable } from 'rxjs';
import { IChatGptScanImageRepository } from '../../core/aplication/contracts/repository/IChatGptScanImageRepository';
import { HttpClient } from '@angular/common/http';
import { Result } from '../../core/aplication/response/Result';
import { ProdcutDto } from '../../core/domain/dto/ProductDto';
import { ConfigService } from '../../core/aplication/services/ConfigService.service';
import { Injectable } from '@angular/core';
import { ResultApiResponse } from '../../core/aplication/response/ResultApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ChatGptScanImageRepository implements IChatGptScanImageRepository {
  //private urlApi: string = 'http://localhost:5048/api/'
  //private urlApi: string = 'http://trackmyprice.co:4000/api/';
  private urlApi : string = "https://trackmyprice.co/api/"
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    // this.urlApi = configService.apiUrl
    // console.log(configService)
  }
  ScannImageToProductDto(url: string): Observable<ResultApiResponse> {
    return this.httpClient.post<ResultApiResponse>(this.urlApi + 'Screen', {
      url: url,
    });
  }
}
