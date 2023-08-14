import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { NytModule } from "../nyt/nyt.module";
import { BooksService } from "./books.service";
import { BooksController } from "./books.controller";

@Module({
  imports: [CqrsModule, NytModule],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}