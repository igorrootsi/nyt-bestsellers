import { NYT } from '../nyt';
import { BookDto } from './dtos/book.dto';

export const BookUtils = {
  exportToDto({ title, author, primary_isbn13 }: NYT.BookDetails): BookDto {
    return {
      title,
      author,
      isbn13: primary_isbn13,
    };
  },
};
