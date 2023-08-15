import { NYT } from '../nyt';
import { BookListDto } from './dtos/bookList.dto';

export namespace BookListsUtils {
  export function convertToDto(payload: NYT.BookList): BookListDto {
    return {
      title: payload.display_name,
      slug: payload.list_name_encoded,
      newestDate: payload.newest_published_date,
    };
  }
}
