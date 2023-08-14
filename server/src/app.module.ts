import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookListsModule } from './bookLists/bookLists.module';
import { HealthController } from './health.controller';
import { NytModule } from './nyt/nyt.module';

@Module({
  imports: [NytModule, BookListsModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
