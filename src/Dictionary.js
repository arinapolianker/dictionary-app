import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Dictionary(props) {
  if (props.data) {
    return (
      <div>
        <h1>{props.data.word}</h1>
        <p>
          {props.data.phonetics.map((phonetic, index) => {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        </p>
        <p>
          {props.data.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
                <hr />
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
