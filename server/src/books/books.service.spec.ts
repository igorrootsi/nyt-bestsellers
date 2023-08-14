import { Test } from '@nestjs/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    booksService = moduleRef.get(BooksService);
  });

  it('should return list of books', () => {
    const booksService = new BooksService();

    expect(booksService.getAll()).toEqual([{ id: 1, title: 'Hello' }]);
  });
});
