import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  public getAll() {
    return [{ id: 1, title: 'Hello' }];
  }
}
