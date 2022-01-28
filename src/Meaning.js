export default function Meaning(props) {
  return (
    <div>
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>Definition: {definition.definition}</p>
              <em>Example: {definition.example}</em>
              <ul>
                {definition.synonyms.map((synonym, index) => {
                  if (index < 5) {
                    return <li key={index}>{synonym}</li>;
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          );
        })}
      </p>
    </div>
  );
}
