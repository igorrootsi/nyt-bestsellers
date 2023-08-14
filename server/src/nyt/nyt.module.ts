import { Module } from "@nestjs/common";
import { NytClientService } from "./nytClient.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [NytClientService],
  exports: [NytClientService],
})
export class NytModule {}