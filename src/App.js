import React, { useEffect, useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Photos from "./Photos";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [load, setLoad] = useState();
  const [keyword, setKeyword] = useState("hello");
  const [word, setWord] = useState();
  const [photos, setPhotos] = useState();
  const [synonym, setSynonym] = useState();
  const getSynonym = (value) => {
    setSynonym(value);
  };

  useEffect(() => {
    setSynonym(synonym);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`;
    axios.get(url).then(handleResponse);

    let pexelsApiakey =
      "563492ad6f91700001000001f418c91d75d64ee88808e11dce0c8a29";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${synonym}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiakey}` } })
      .then(handlePexlesResponse);
  }, [synonym]);

  function search(event) {
    call();

    event.preventDefault();
  }
  function handleResponse(response) {
    setWord(response.data[0]);
    setLoad(true);
  }
  function handlePexlesResponse(response) {
    setPhotos(response.data.photos);
  }
  function enterWord(event) {
    setKeyword(event.target.value);
  }
  function call() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
    let pexelsApiakey =
      "563492ad6f91700001000001f418c91d75d64ee88808e11dce0c8a29";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiakey}` } })
      .then(handlePexlesResponse);
  }
  if (load) {
    return (
      <div>
        <div className="head">
          <h1>Dictionary</h1>
        </div>

        <form onSubmit={search}>
          <input
            type="text"
            placeholder="search for a word..."
            onChange={enterWord}
          />
          <button className="search">search</button>
        </form>

        <Dictionary data={word} getSynonym={getSynonym} />
        <Photos photos={photos} />
        <Footer />
      </div>
    );
  } else {
    call();
    return "Loading...";
  }
}

export default App;
