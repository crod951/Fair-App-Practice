import * as actions from "./actions"

const initialState = {
  vehicles : [],
  loading : false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_VEHICLES :
      return {
        ...state,
        loading : true
      };
    case actions.RECEIVED_VEHICLES :
      return {
        ...state,
        loading : false,
        vehicles : action.vehicles
      };
    default : return state;
  }
}
