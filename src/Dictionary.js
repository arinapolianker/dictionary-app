import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Dictionary.css";
import "./Meaning.css";

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
                <Meaning meaning={meaning} />
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
