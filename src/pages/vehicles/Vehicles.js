import React, {Component} from "react"
import {connect} from "react-redux"
import {getVehicles} from "./dux/actions"

import CardContainer from './components/card-container/CardContainer';
import VehicleCard from './components/vehicle-card/VehicleCard';
import VehicleImage from './components/vehicle-image/VehicleImage';

import ColorText from 'components/color-text/ColorText';
import FlexContainer from 'components/flex-container/FlexContainer';
import StyledText from 'components/styled-text/StyledText';

class Vehicles extends Component {
  componentDidMount() {
    this.props.getVehicles(this.props.location.search);
  }

  renderVehiclePrice = price => `$${(price / 100).toFixed(0)}`;

  viewVehicle = (id) => {
    this.props.history.push(`/${id}`);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <CardContainer>
          {this.props.vehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} onClick={() => this.viewVehicle(vehicle.id)}>
              <StyledText fontSize="14px">
                {vehicle.model_year} {vehicle.make}
              </StyledText>
              <StyledText fontSize="18px" fontWeight="bold">
                {vehicle.model} {vehicle.trim}
              </StyledText>
              <VehicleImage src={vehicle.chrome_image_url} alt="" />
              <FlexContainer justify="space-between">
                <FlexContainer column>
                  <StyledText fontSize="26px" fontWeight="100">
                    {this.renderVehiclePrice(vehicle.product_financials[0].start_fee_cents)}
                  </StyledText>
                  <StyledText fontSize="14px">
                    Starting
                  </StyledText>
                </FlexContainer>
                <FlexContainer column align="flex-end">
                  <ColorText fontSize="30px" fontWeight="900">
                    {this.renderVehiclePrice(vehicle.product_financials[0].monthly_payment_cents)}
                  </ColorText>
                  <StyledText fontSize="14px">
                    Per Month
                  </StyledText>
                </FlexContainer>
              </FlexContainer>
            </VehicleCard>
          ))}
        </CardContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.vehicles
});
const mapDispatchToProps = (dispatch) => ({
  getVehicles: page => dispatch(getVehicles(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)
