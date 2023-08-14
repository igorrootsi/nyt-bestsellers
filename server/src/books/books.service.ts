import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { config } from 'src/config';

@Injectable()
export class BooksService {
  private readonly logger = new Logger(BooksService.name);
  private readonly nytApiKey = config.getNytApiKey();

  constructor(private readonly httpService: HttpService) {}

  public async getAll() {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.nytApiKey}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
