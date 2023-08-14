import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { FetchBooksQuery } from 'src/nyt';
import { BooksRequestDto } from './dtos/books-request.dto';

@Injectable()
export class BooksService {
  constructor(private readonly queryBus: QueryBus) {}

  public async getBooks({ date, listSlug }: BooksRequestDto) {
    return this.queryBus.execute(new FetchBooksQuery(listSlug, date));
  }
}
