import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './index.css';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root'),
);

//Передача хранилища  Redux в качестве пропа
//Обёртка корневого компоненты в Provider