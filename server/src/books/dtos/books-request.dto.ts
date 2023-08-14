import { ApiProperty } from '@nestjs/swagger';

export class BooksRequestDto {
  @ApiProperty()
  public listSlug: string;

  @ApiProperty({ format: 'date' })
  public date: string;
}
