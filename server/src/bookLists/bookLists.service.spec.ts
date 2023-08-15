import { QueryBus } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { BookListsService } from './bookLists.service';

describe('BooksService', () => {
  let bookListsService: BookListsService;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookListsService, QueryBus],
    })
      .overrideProvider(QueryBus)
      .useValue({ execute: jest.fn() })
      .compile();

    bookListsService = moduleRef.get(BookListsService);
    queryBus = moduleRef.get(QueryBus);
  });

  it('should return list of books', async () => {
    jest.mocked(queryBus.execute).mockResolvedValue({
      results: [
        {
          display_name: 'Test 1',
          list_name_encoded: 'test-1',
          newest_published_date: 'yesterday',
        },
      ],
    });

    const actual = await bookListsService.getAll();

    expect(actual).toEqual([
      { title: 'Test 1', slug: 'test-1', newestDate: 'yesterday' },
    ]);
  });
});
