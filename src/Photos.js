export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="container">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    key={index}
                    className="img-fluid pic"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
