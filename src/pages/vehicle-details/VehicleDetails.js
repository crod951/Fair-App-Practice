import React, {Component} from "react"
import {connect} from "react-redux"
import {getVehicleDetails} from "./dux/actions"

import DetailCard from './components/detail-card/DetailCard';
import DetailContainer from './components/detail-container/DetailContainer';

import ColorText from 'components/color-text/ColorText';
import FlexContainer from 'components/flex-container/FlexContainer';
import GradientBackground from 'components/gradient-background/GradientBackground';
import StyledText from 'components/styled-text/StyledText';

class VehicleDetails extends Component {
  componentDidMount() {
    this.props.getVehicleDetails(this.props.match.params.id);
  }

  render() {
    console.log(this.props.vehicleDetails.image_location_list)
    return (
      <DetailContainer>
        <DetailCard>
          <StyledText fontSize="30px" fontWeight="100">
            {this.props.vehicleDetails.model_year} {this.props.vehicleDetails.make}
          </StyledText>
          <StyledText fontSize="60px" fontWeight="500">
            {this.props.vehicleDetails.model} {this.props.vehicleDetails.trim}
          </StyledText>
        </DetailCard>
      </DetailContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.vehicleDetails
});
const mapDispatchToProps = (dispatch) => ({
  getVehicleDetails: id => dispatch(getVehicleDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails)
