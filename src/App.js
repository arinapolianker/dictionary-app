import React, { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Photos from "./Photos";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [keyword, setKeyword] = useState();
  const [word, setWord] = useState();
  const [photos, setPhotos] = useState();

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setWord(response.data[0]);
  }
  function handlePexlesResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }
  function enterWord(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleDictionaryResponse);

    let pexelsApiakey =
      "563492ad6f91700001000001f418c91d75d64ee88808e11dce0c8a29";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiakey}` } })
      .then(handlePexlesResponse);
  }

  return (
    <div>
      <div className="head">
        <h1>Dictionary</h1>
      </div>

      <form onSubmit={search}>
        <input
          type="text"
          placeholder="search a word..."
          onChange={enterWord}
        />
        <button className="search">search</button>
      </form>

      <Dictionary data={word} />
      <Photos photos={photos} />
      <Footer />
    </div>
  );
}

export default App;
