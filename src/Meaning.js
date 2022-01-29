import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <hr />
      <p>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <em className="example">"{definition.example}"</em>
              <Synonyms synonym={definition.synonyms} />
            </div>
          );
        })}
      </p>
    </div>
  );
}
