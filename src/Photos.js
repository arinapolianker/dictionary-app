export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="container">
        {props.photos.map((photo, index) => {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                key={index}
                className="pic"
              />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
