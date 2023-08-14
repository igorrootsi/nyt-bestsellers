import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NytModule } from '../nyt';
import { BookListsController } from './bookLists.controller';
import { BookListsService } from './bookLists.service';

@Module({
  imports: [CqrsModule, NytModule],
  providers: [BookListsService],
  controllers: [BookListsController],
})
export class BookListsModule {}
