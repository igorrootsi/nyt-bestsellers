import { Module } from '@nestjs/common';
import { BookListsController } from './bookLists.controller';
import { BookListsService } from './bookLists.service';
import { HttpModule } from '@nestjs/axios';
import { NytModule } from 'src/nyt/nyt.module';

@Module({
  imports: [HttpModule, NytModule],
  providers: [BookListsService],
  controllers: [BookListsController],
})
export class BookListsModule {}
