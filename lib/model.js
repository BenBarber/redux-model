import * from './actions';

export default class Model {
  static resource = "";
  static endpoint = "";

  /*
  * Find a resource collection
  * @param id
  */
  all() {
    return (dispatch, state) => {
      // query logic
      let response = {}

      dispatch({
        type: FIND_ALL,
        resource: this.resource,
        data: response
      });
    }
  }

  /*
  * Find a resource
  * @param id
  */
  find(id) {
    return (dispatch, state) => {
      // query logic
      let response = {}

      dispatch({
        type: FIND_RESOURCE,
        resource: this.resource,
        data: response
      });
    }
  }

  /*
  * Create an new resource
  * @param params
  */
  create(params) {
    return (dispatch, state) => {
      // query logic
      let response = {}

      dispatch({
        type: CREATE_RESOURCE,
        resource: this.resource,
        data: response
      });
    }
  }

  /*
  * Update a resource
  * @param params
  */
  update(params) {
    return (dispatch, state) => {
      // query logic
      let response = {}

      dispatch({
        type: UPDATE_RESOURCE,
        resource: this.resource,
        data: response
      });
    }
  }


  /*
  * Delete a resource
  * @param id
  */
  delete(id) {
    return (dispatch, state) => {
      // query logic
      let response = {}

      dispatch({
        type: DELETE_RESOURCE,
        resource: this.resource,
        data: response
      });
    }
  }
}
