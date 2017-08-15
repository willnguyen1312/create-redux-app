import { fromJS } from 'immutable';
import { createReducer } from 'redux-create-reducer';

// import { GET_API_DATA, GET_API_DATA_LOADED, GET_API_DATA_ERROR } from './constants';

const initialState = fromJS({
  apiData: null,
  apiDataLoading: null,
  apiDataLoaded: null,
  apiDataError: null,
});

const GET_API_DATA = (state) => state.set('apiDataLoading', true).set('apiDataError', null);
const GET_API_DATA_LOADED = (state, action) =>
  state
    .set('apiData', action.data)
    .set('apiDataLoading', false)
    .set('apiDataLoaded', true)
    .set('apiDataError', null);
const GET_API_DATA_ERROR = (state, action) =>
  state.set('apiDataLoading', false).set('apiDataLoaded', false).set('apiDataError', action.error);

const appReducer = createReducer(initialState, {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
});
// const appReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_API_DATA:
//       return state.set('apiDataLoading', true).set('apiDataError', null);
//     case GET_API_DATA_LOADED:
//       return state
//         .set('apiData', action.data)
//         .set('apiDataLoading', false)
//         .set('apiDataLoaded', true)
//         .set('apiDataError', null);
//     case GET_API_DATA_ERROR:
//       return state
//         .set('apiDataLoading', false)
//         .set('apiDataLoaded', false)
//         .set('apiDataError', action.error);
//     default:
//       return state;
//   }
// };

export default appReducer;
