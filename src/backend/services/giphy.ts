import fetch from "node-fetch";
import HttpError from "../errors/http-error";
import { giphyApiKey } from "../config";
import { SearchResults } from "../../api";

interface GiphySearchResponse {
  data: Array<GiphyResult>;
}

// Actual response contains many other fields,
// these are just the ones we're interested in.
export interface GiphyResult {
  id: string;
  title: string;
  url: string;
  images: {
    fixed_width: {
      url: string;
    };
  };
}

const giphySearchUrl = "https://api.giphy.com/v1/gifs/search";

export async function search(phrase: string): Promise<SearchResults> {
  const params = new URLSearchParams({
    api_key: giphyApiKey,
    q: phrase,
    limit: "5",
  });
  const response = await fetch(`${giphySearchUrl}?${params}`);
  if (!response.ok) {
    console.error("Giphy responded with", response.status, response.statusText);
    return Promise.reject(new HttpError(response));
  }
  const giphyResults: GiphySearchResponse = await response.json();
  return giphyResults.data.map((giphyResult) => ({
    id: giphyResult.id,
    title: giphyResult.title,
    url: giphyResult.url,
    thumbnail: giphyResult.images.fixed_width.url,
  }));
}
