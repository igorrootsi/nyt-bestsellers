import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BooksRequestDto {
  @ApiProperty()
  public listSlug: string;

  @ApiProperty({ format: 'date' })
  public date: string;

  @ApiPropertyOptional({ default: 10 })
  public limit: number;
}
