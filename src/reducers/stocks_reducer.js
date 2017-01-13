import {FETCH_STOCKS} from '../actions/index';

const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STOCKS:
    console.log(action.payload);
      return { ...state, all: action.payload.data}
    default:
      return state;

  }
}
