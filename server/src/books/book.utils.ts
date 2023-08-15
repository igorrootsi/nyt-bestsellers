import { NYT } from '../nyt';
import { BookDto } from './dtos/book.dto';

export const BookUtils = {
  exportToDto({ rank, title, author, primary_isbn13 }: NYT.BookDetails): BookDto {
    return {
      rank,
      title,
      author,
      isbn13: primary_isbn13,
    };
  },
};
