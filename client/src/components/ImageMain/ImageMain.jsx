import { Parallax } from 'react-parallax';
import Typical from 'react-typical';
import fon from '../../img/fon-dom.jpg';
import './ImageMain.css';

function ImageMain() {
  return (
    <Parallax className="image-imageMain" bgImage={fon} strength={200}>
      <div className="image-content">
        <div className="parallax-text">
          <p>
            Проведите
            <br />
            свои выходные 
            <br />
            в прекрасном месте
          </p>
          <div className="parallax-text-2">
            <Typical
              loop={Infinity}
              steps={[
                'Красивая природа',
                1000,
                'Спокойствие и умиротворение',
                1000,
                'Идеальный отдых',
                1000,
              ]}
            />
          </div>
          <button className="bnt-buy">
            <a href="/booking"><span>Забронировать</span></a>
          </button>
        </div>
      </div>
    </Parallax>
  );
}

export default ImageMain;
