export default function Synonyms(props) {
  function searchSynonym(event) {
    let synonym = event.target.innerHTML;
    props.getSynonym(synonym);
  }
  if (props.synonym) {
    return (
      <div className="syn">
        {props.synonym.map((synonym, index) => {
          if (index < 10) {
            return (
              <button
                className="syn-button"
                key={index}
                onClick={searchSynonym}
              >
                {synonym}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
