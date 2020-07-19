import "./index.html";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { SearchResponse } from "../api";

declare const API_URL: string;

const App: React.FunctionComponent = () => {
  const [response, setResponse] = useState<SearchResponse>();
  useEffect(() => {
    fetch(`${API_URL}/search?q=cat`).then(async (res) => {
      if (res.ok) {
        setResponse(await res.json());
      }
    });
  }, []);

  return (
    <>
      API says: <pre>{JSON.stringify(response, null, 2)}</pre>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
