import * as actions from "./actions"

const initialState = {
  vehicleDetails : {},
  loading : false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_VEHICLE_DETAILS :
      return {
        ...state,
        loading : true
      };
    case actions.RECEIVED_VEHICLE_DETAILS :
      return {
        ...state,
        loading : false,
        vehicleDetails : action.vehicleDetails
      };
    default : return state;
  }
}
