export default function Synonyms(props) {
  return (
    <div>
      {props.synonym.map((synonym, index) => {
        if (index < 10) {
          return (
            <button className="syn" key={index}>
              {synonym}
            </button>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
