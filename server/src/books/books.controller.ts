import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@Controller('/v1/books')
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOkResponse()
  @Get()
  public getBooks() {
    return this.booksService.getBooks();
  }
}
