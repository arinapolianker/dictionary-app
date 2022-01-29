import Synonyms from "./Synonyms.js";
import Phonetic from "./Phonetic.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  if (props.data) {
    return (
      <div>
        <div className="container word">
          <h2>{props.data.word}</h2>
          <Phonetic phonetic={props.data.phonetics[0]} />
        </div>
        <p>
          {props.data.meanings.map((meaning, index) => {
            return (
              <div key={index} className="container">
                <h3>{meaning.partOfSpeech}</h3>
                <hr />
                <p>
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <div key={index}>
                        <p className="definition">{definition.definition}</p>
                        <em className="example">"{definition.example}"</em>
                        <Synonyms
                          synonym={definition.synonyms}
                          getSynonym={props.getSynonym}
                        />
                      </div>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
