import './About.css';
import girl from '../../../img/les.jpg';

function About() {
  return (
    <div className="about-container" id="AboutUs">
      <div className="about-picture"><img src={girl} alt="" /></div>
      <div className="about-options">
        <h3 className="about-container-h1">Информация</h3>
        <div className="about-text">
          <p className="about-p">
            Что такое EcoPark?
          </p>
          <span className="text-light">
            Это спокойное место, где вы можете побыть на едине с природой,
            насладиться красотой леса, хорошо провести время с родными. И наша 
            система бронироввания помогает грамотно выбрать лучший вариант для
            заселения, посмотреть характеристики домов, забронировать 
            определнный дом на указанную дату. 
          </span>
        </div>
        {/*<button  className="btn-about_us"><a href="#contacts">Как добраться?</a></button>*/}
      </div>
    </div>
  );
}

export default About;
