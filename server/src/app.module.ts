import { Module } from '@nestjs/common';
import { BookListsModule } from './bookLists/bookLists.module';
import { BooksModule } from './books/books.module';
import { HealthController } from './health.controller';
import { NytModule } from './nyt/nyt.module';

@Module({
  imports: [NytModule, BookListsModule, BooksModule],
  controllers: [HealthController],
})
export class AppModule {}
