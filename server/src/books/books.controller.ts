import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { BooksRequestDto } from './dtos/books-request.dto';

@Controller('/v1/books')
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOkResponse()
  @Get()
  public getBooks(@Query() params: BooksRequestDto) {
    return this.booksService.getBooks(params);
  }
}
