export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);
  const play = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={play} className="sound">
        <i class="fas fa-volume-up"></i>
      </button>{" "}
      <span> {props.phonetic.text}</span>
    </div>
  );
}
