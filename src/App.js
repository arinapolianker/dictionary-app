import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [keyword, setKeyword] = useState();

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }
  function word(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="text" placeholder="search..." onChange={word} />
        <button>search</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
