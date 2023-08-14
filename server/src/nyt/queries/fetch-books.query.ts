export class FetchBooksQuery {
  constructor(
    public readonly listSlug: string,
    public readonly date: string,
  ) {}
}
