import React, { useState } from "react";

interface Props {
  onSearch: (searchPhrase: string) => void;
}

const SearchForm: React.FunctionComponent<Props> = ({ onSearch }) => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchPhrase);
      }}
    >
      <input
        type="text"
        minLength={3}
        value={searchPhrase}
        placeholder="Search gifs and images"
        onChange={(e) => {
          setSearchPhrase(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
