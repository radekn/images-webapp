import React from "react";
import type {
  SearchResults as ISearchResults,
  SearchResponse,
} from "../../api";

interface Props {
  data: SearchResponse;
}

const SearchResults: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <section>
      <h2>Giphy</h2>

      <ProviderSearchResults results={data.giphy} />
    </section>
  );
};

const ProviderSearchResults: React.FunctionComponent<{
  results: ISearchResults;
}> = ({ results }) => {
  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>
          <a href={item.url}>
            <figure>
              <img src={item.thumbnail} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
