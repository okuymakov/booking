import './NotFound.css';
import notfound from '../../img/notfound2.svg';
import logo from '../../img/icon.png';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-picture"><img src={notfound} alt="" /></div>
      <div className="notfound-options">
        <div className="notfound-logo">
          <img src={logo} alt="" />
          <div className="notfound-logo-text">
            <span className="eco-text">Eco</span>
            PARK
          </div>
        </div>
        <div className="notfount-text_1">Похоже эта страница отсутствует</div>
        <a href="/" className="notfount-button">Bернуться на главную</a>
      </div>
    </div>
  );
}

export default NotFound;
