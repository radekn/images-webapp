export interface SearchResponse {
  giphy: SearchResults;
  pixabay: SearchResults;
}

export type SearchResults = Array<SearchResultItem>;

export interface SearchResultItem {
  id: string;
  title?: string;
  url: string;
  // URL of thumbnail to display in search results
  thumbnail: string;
}
