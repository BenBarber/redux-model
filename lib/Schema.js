import * from './actions';

export default class Schema {
  static initialState = {}

  reducer(state = initialState, action) {
    switch(action.type) {

      case FIND_ALL:
        return {
          ...state,
          [action.resource]: action.data
        }

      case FIND_RESOURCE:
        return {
          ...state,
          [action.resource]: action.data
        }

      case CREATE_RESOURCE:
        return {
          ...state,
          [action.resource]: action.data
        }

      case UPDATE_RESOURCE:
        return {
          ...state,
          [action.resource]: action.data
        }

      case DELETE_RESOURCE:
        return {
          ...state,
          [action.resource]: action.data
        }

      case MODEL_ERROR:
        return {
          ...state,
          [action.resource]: action.data
        }

      case default:
        return state;
    }
  }
}
