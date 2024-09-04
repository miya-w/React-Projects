// reducer.js
import { INCREMENT, DECREMENT } from '../actions/actions'; // Corrected path

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 10 };
    case DECREMENT:
      return { count: state.count - 10 };
    default:
      return state;
  }
};

export default counterReducer;
