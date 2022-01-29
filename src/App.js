import React, { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [keyword, setKeyword] = useState();
  const [word, setWord] = useState();

  function handleResponse(response) {
    console.log(response.data[0]);
    setWord(response.data[0]);
  }
  function enterWord(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
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
      <Footer />
    </div>
  );
}

export default App;
