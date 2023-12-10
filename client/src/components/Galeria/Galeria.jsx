import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Galeria.css';
import dom1 from '../../img/house1.jpg';
import dom2 from '../../img/house2.jpg';
import dom3 from '../../img/house3.jpeg';

function Galeria() {
  return (
    <div className="app-container-galeria">
      <div className="galeria-text">
        <h3 className="h3-text">Галерея</h3>
        <p className="h4-text">БЕРЕГ ОЗЕРА И ЧИСТЫЙ ВОЗДУХ</p>
        <p className="h4-text">КОМФОРТ НА ПРИРОДЕ</p>
        <p className="h4-text">ТЕПЛО В ХОЛОДНОЕ ВРЕМЯ ГОДА</p>
        <p className="h4-text">УЮТНЫЙ ИНТЕРЬЕР ДОМОВ</p>
        <p className="h4-text">ПРИЯТНЫЙ ПЕРСОНАЛ</p>
      </div>
      <div className="galeria-container">

        <Swiper
          effect="cube"
          grabCursor
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={dom1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dom2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dom3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Galeria;
