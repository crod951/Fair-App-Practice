import {combineReducers} from "redux"

import vehicles from "pages/vehicles/dux/reducer"
import vehicleDetails from 'pages/vehicle-details/dux/reducer';

export default combineReducers({
  vehicles,
  vehicleDetails,
});
