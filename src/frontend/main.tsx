import "./index.html";
import "./main.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SearchResponse } from "../api";
import SearchForm from "./components/search-form";
import SearchResults from "./components/search-results";

declare const API_URL: string;

const App: React.FunctionComponent = () => {
  const [response, setResponse] = useState<SearchResponse>();
  function search(searchPhrase: string) {
    const params = new URLSearchParams({ q: searchPhrase });
    fetch(`${API_URL}/search?${params}`).then(async (res) => {
      if (res.ok) {
        setResponse(await res.json());
      }
    });
  }

  return (
    <>
      <header>
        <SearchForm onSearch={search} />
      </header>
      <main>{response && <SearchResults data={response} />}</main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
