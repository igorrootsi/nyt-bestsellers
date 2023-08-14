import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookListsService } from './bookLists.service';
import { BookListDto } from './dtos/bookList.dto';

@Controller('/book-lists')
@ApiTags('Book lists')
export class BookListsController {
  constructor(private readonly booksService: BookListsService) {}

  @Get()
  @ApiOkResponse({ type: BookListDto, isArray: true })
  public getBooks() {
    return this.booksService.getAll();
  }
}
