import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FetchBooksQuery, NYT } from '../nyt';
import { BooksRequestDto } from './dtos/books-request.dto';
import { BookDto } from './dtos/book.dto';
import { BookUtils } from './book.utils';

@Injectable()
export class BooksService {
  constructor(private readonly queryBus: QueryBus) {}

  public async getBooks({
    date,
    listSlug,
    limit = 10,
  }: BooksRequestDto): Promise<BookDto[]> {
    const data = await this.queryBus.execute<
      FetchBooksQuery,
      NYT.BooksResponse
    >(new FetchBooksQuery(listSlug, date));

    return data.results.books
      .map(BookUtils.exportToDto)
      .sort((a, b) => a.rank - b.rank)
      .slice(0, limit);
  }
}
