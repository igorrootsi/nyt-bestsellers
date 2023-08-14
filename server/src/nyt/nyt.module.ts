import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { NytClientService } from "./nytClient.service";
import { FetchBookListsHandler } from "./queries/handlers/fetch-book-lists.handler";

@Module({
  imports: [HttpModule],
  providers: [NytClientService, FetchBookListsHandler],
})
export class NytModule {}