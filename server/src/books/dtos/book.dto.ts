import { ApiProperty } from "@nestjs/swagger";

export class BookDto {
  @ApiProperty()
  public rank: number;

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public author: string;

  @ApiProperty()
  public isbn13: string;
}
