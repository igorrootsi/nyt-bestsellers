import { ApiProperty } from '@nestjs/swagger';

export class BookListDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public slug: string;

  @ApiProperty()
  public newestDate: string;
}
