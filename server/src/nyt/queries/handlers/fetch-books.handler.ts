import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NytClientService } from 'src/nyt/nytClient.service';
import { NYT } from 'src/nyt/types';
import { FetchBooksQuery } from '../fetch-books.query';

@QueryHandler(FetchBooksQuery)
export class FetchBooksHandler implements IQueryHandler<FetchBooksQuery> {
  constructor(private readonly nytClientService: NytClientService) {}

  execute({ listSlug, date }: FetchBooksQuery): Promise<any> {
    const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${listSlug}.json`;

    console.log('url', url);

    return this.nytClientService.executeRequest<NYT.BookListsResponse>({
      method: 'GET',
      url,
    });
  }
}
