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
    <>
      <section>
        <h2>Giphy</h2>
        <div className="giphy-attribution">Powered By GIPHY</div>

        <ProviderSearchResults results={data.giphy} />
      </section>
      <section>
        <h2>Pixabay</h2>

        <ProviderSearchResults results={data.pixabay} />
      </section>
    </>
  );
};

const ProviderSearchResults: React.FunctionComponent<{
  results: ISearchResults;
}> = ({ results }) => {
  return (
    <>
      {results.map((item) => (
        <article key={item.id}>
          <a href={item.url}>
            <figure>
              <img src={item.thumbnail} alt={item.title} />
              {item.title && <figcaption>{item.title}</figcaption>}
            </figure>
          </a>
        </article>
      ))}
    </>
  );
};

export default SearchResults;
