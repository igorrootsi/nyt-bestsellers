import { Injectable, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { config } from 'src/config';
import { FetchBookListsQuery, NYT } from 'src/nyt';
import { BookListsUtils } from './bookLists.utils';
import { BookListDto } from './dtos/bookList.dto';

@Injectable()
export class BookListsService {
  private readonly logger = new Logger(BookListsService.name);
  private readonly nytApiKey = config.getNytApiKey();

  constructor(private readonly queryBus: QueryBus) {}

  public async getAll(): Promise<BookListDto[]> {
    const data = await this.queryBus.execute<
      FetchBookListsQuery,
      NYT.BookListsResponse
    >(new FetchBookListsQuery());

    return data.results.map(BookListsUtils.convertToDto);
  }
}
