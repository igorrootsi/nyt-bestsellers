import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NytClientService } from '../../nytClient.service';
import { NYT } from '../../types';
import { FetchBookListsQuery } from '../fetch-book-lists.query';

@QueryHandler(FetchBookListsQuery)
export class FetchBookListsHandler
  implements IQueryHandler<FetchBookListsHandler>
{
  constructor(private readonly nytClientService: NytClientService) {}

  async execute(): Promise<NYT.BookListsResponse> {
    return this.nytClientService.executeRequest<NYT.BookListsResponse>({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/books/v3/lists/names.json',
    });
  }
}
