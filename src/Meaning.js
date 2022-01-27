export default function Meaning(props) {
  return (
    <div>
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <em>Example: {definition.example}</em>
            </div>
          );
        })}
      </p>
    </div>
  );
}
