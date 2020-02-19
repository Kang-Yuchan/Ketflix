import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

const Search = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if(searchTerm !== "") {
      searchByTerm();
    }
  }

  const updateTerm = e => {
    const { target : { value } } = e;
    setSearchTerm(value);
  }

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("該当する検索結果がありません。");
    } finally {
      setLoading(false);
    }
  }

  return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={handleSubmit}
        updateTerm={updateTerm}
      />
  );
}

export default Search;