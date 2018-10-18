export const GET_VEHICLE_DETAILS = "vehicle details get-vehicle-details"
export const RECEIVED_VEHICLE_DETAILS = "vehcile details received-vehicle-details"

export function getVehicleDetails(id) {
  return function(dispatch) {
    dispatch({ type: GET_VEHICLE_DETAILS });
    fetch('https://private-f14e4-interviewapi3.apiary-mock.com/vehicles/' + id)
      .then((response) => response.json())
      .then((vehicleDetails) => dispatch({ type: RECEIVED_VEHICLE_DETAILS, vehicleDetails: vehicleDetails.data.vehicle }));
  }
}
