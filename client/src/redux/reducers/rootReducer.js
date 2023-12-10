import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { reviewsReducer } from './reviewsReducer';
import { homesReducer } from './homesReducer';
import { orderReducer } from './orderReducer';
import { reservationsReducer } from './reservationsReducer';

export const rootReducer = combineReducers({
  adminReducer,
  homesReducer,
  reviewsReducer,
  orderReducer,
  reservationsReducer,
});

//Корневой редуктор, он переддаётся при создании хранилища в createStore()