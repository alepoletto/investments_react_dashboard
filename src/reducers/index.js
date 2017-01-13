import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  stocks: stocksReducer,
  form: formReducer
});

export default reducers;
