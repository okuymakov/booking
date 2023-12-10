import ReviewsList from '../ReviewsList/ReviewsList';
import About from './About/About';
import './Home.css';
import ImageMain from '../ImageMain/ImageMain';
import Galeria from '../Galeria/Galeria';


function Home() {
  return (
    <div>
      <ImageMain />
      <div className="app-container">
        <About />
        <Galeria />
      </div>
      <div className="app-container">
        <ReviewsList />
      </div>
    </div>
  );
}

export default Home;
