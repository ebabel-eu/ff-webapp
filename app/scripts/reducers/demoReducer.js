import * as types from '../constants/actionTypes';

const defaultState = {
  demo: false
};

export default function demoReducer (state = defaultState, action) {
  switch (action.type) {
    case types.DEMO_ACTION:
      return Object.assign({}, state, {
        demo: !state.demo
      });
    default:
      return state;
  }
}
