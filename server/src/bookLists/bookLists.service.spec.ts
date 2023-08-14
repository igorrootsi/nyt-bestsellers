import { Test } from '@nestjs/testing';
import { BookListsService } from './bookLists.service';

describe('BooksService', () => {
  let booksService: BookListsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookListsService],
    }).compile();

    booksService = moduleRef.get(BookListsService);
  });

  it('should return list of books', () => {
    const booksService = new BookListsService();

    expect(booksService.getAll()).toEqual([{ id: 1, title: 'Hello' }]);
  });
});
