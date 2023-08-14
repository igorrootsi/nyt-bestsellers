import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { NytClientService } from "./nytClient.service";
import { FetchBookListsHandler } from "./queries/handlers/fetch-book-lists.handler";
import { FetchBooksHandler } from "./queries/handlers/fetch-books.handler";

@Module({
  imports: [HttpModule],
  providers: [NytClientService, FetchBookListsHandler, FetchBooksHandler],
})
export class NytModule {}