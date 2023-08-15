import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { config } from '../config';

@Injectable()
export class NytClientService {
  private readonly logger = new Logger(NytClientService.name);
  private readonly apiKey = config.getNytApiKey();

  constructor(private readonly httpService: HttpService) {}

  public async executeRequest<T>({
    url,
    ...requestConfig
  }: AxiosRequestConfig): Promise<T> {
    const urlWithApiKey = `${url}?api-key=${this.apiKey}`;

    const { data } = await firstValueFrom(
      this.httpService.request({ ...requestConfig, url: urlWithApiKey }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
