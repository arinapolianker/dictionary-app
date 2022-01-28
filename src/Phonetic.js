export default function Phonetic(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        sound
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
