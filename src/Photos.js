export default function Photos(props) {
  return (
    <div className="container">
      {props.photos.map((photo, index) => {
        return (
          <img
            src={photo.src.landscape}
            alt={photo.alt}
            key={index}
            className="pic"
          />
        );
      })}
    </div>
  );
}
