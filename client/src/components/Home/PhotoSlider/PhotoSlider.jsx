import './PhotoSlider.css';

function PhotoSlider() {
  return (
    <div className="carousel carousel-slider">
      <div className="carousel-item" href="#one!">
        <img
          className="img-item"
          src={require('../../../img/less1.jpg')}
          alt="not found"
        />
      </div>
      <div className="carousel-item" href="#two!">
        <img
          className="img-item"
          src={require('../../../img/less2.jpg')}
          alt="not found"
        />
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <img
          className="img-item"
          src={require('../../../img/less3.jpg')}
          alt="not found"
        />
      </div>

    </div>
  );
}

export default PhotoSlider;
