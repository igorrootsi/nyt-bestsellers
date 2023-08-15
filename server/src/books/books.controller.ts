import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { BooksRequestDto } from './dtos/books-request.dto';
import { BookDto } from './dtos/book.dto';

@Controller('/v1/books')
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOkResponse({ type: BookDto, isArray: true })
  @Get()
  public getBooks(@Query() params: BooksRequestDto) {
    return this.booksService.getBooks(params);
  }
}
