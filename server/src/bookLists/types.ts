export namespace NYT {
  export interface BookList {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: 'WEEKLY' | 'MONTHLY';
  }

  export interface BookListsResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: BookList[];
  }
}
