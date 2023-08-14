import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { config } from 'src/config';
import { NYT } from './types';
import { BookListsUtils } from './bookLists.utils';
import { BookListDto } from './dtos/bookList.dto';
import { NytClientService } from 'src/nyt/nytClient.service';

@Injectable()
export class BookListsService {
  private readonly logger = new Logger(BookListsService.name);
  private readonly nytApiKey = config.getNytApiKey();

  constructor(private readonly nytClient: NytClientService) {}

  public async getAll(): Promise<BookListDto[]> {
    const data = await this.nytClient.executeRequest<NYT.BookListsResponse>({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/books/v3/lists/names.json'
    })
    // const { data } = await firstValueFrom(
    //   this.httpService
    //     .get<NYT.BookListsResponse>(
    //       `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.nytApiKey}`,
    //     )
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         this.logger.error(error.response.data);
    //         throw 'An error happened!';
    //       }),
    //     ),
    // );

    return data.results.map(BookListsUtils.convertToDto);
  }
}
