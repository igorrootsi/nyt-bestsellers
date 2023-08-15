import { Injectable, Logger } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FetchBookListsQuery, NYT } from '../nyt';
import { BookListsUtils } from './bookLists.utils';
import { BookListDto } from './dtos/bookList.dto';

@Injectable()
export class BookListsService {
  constructor(private readonly queryBus: QueryBus) {}

  public async getAll(): Promise<BookListDto[]> {
    const data = await this.queryBus.execute<
      FetchBookListsQuery,
      NYT.BookListsResponse
    >(new FetchBookListsQuery());

    return data.results.map(BookListsUtils.convertToDto);
  }
}
