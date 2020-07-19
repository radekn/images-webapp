import fetch from "node-fetch";
import HttpError from "../errors/http-error";
import { pixabayApiKey } from "../config";
import { SearchResults } from "../../api";

interface PixabaySearchResponse {
  hits: Array<PixabayResult>;
}

// Actual response contains many other fields,
// these are just the ones we're interested in.
export interface PixabayResult {
  id: string;
  pageURL: string;
  previewURL: string;
}

const pixabaySearchUrl = "https://pixabay.com/api/";

export async function search(phrase: string): Promise<SearchResults> {
  const params = new URLSearchParams({
    key: pixabayApiKey,
    q: phrase,
    per_page: "5",
  });
  const response = await fetch(`${pixabaySearchUrl}?${params}`);
  if (!response.ok) {
    console.error(
      "Pixabay responded with",
      response.status,
      response.statusText
    );
    return Promise.reject(new HttpError(response));
  }
  const pixabayResults: PixabaySearchResponse = await response.json();
  return pixabayResults.hits.map((hit) => ({
    id: hit.id,
    url: hit.pageURL,
    thumbnail: hit.previewURL,
  }));
}
