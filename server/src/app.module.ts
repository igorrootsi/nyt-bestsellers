import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookListsModule } from './bookLists/bookLists.module';
import { HealthController } from './health.controller';
import { NytModule } from './nyt/nyt.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [NytModule, BookListsModule, BooksModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
