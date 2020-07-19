import "./index.html";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

declare const API_URL: string;

const App: React.FunctionComponent = () => {
  const [response, setResponse] = useState<string>();
  useEffect(() => {
    fetch(`${API_URL}/hello`).then(async (res) => {
      if (res.ok) {
        setResponse(await res.text());
      }
    });
  }, []);

  return (
    <>
      API says: <pre>{response}</pre>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
