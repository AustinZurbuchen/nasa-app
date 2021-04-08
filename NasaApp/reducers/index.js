import {combineReducers} from 'redux';
import photoReducer from './photo';
import photoListReducer from './photoList';

const reducers = {
  photo: photoReducer,
  photoList: photoListReducer,
};
export default combineReducers(reducers);
