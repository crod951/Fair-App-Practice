import React, {Component} from "react"
import {connect} from "react-redux"
import {getVehicleDetails} from "./dux/actions"

import CarouselCard from './components/carousel-card/CarouselCard';
import DetailCard from './components/detail-card/DetailCard';
import DetailContainer from './components/detail-container/DetailContainer';
import ImageCarousel from './components/image-carousel/ImageCarousel';

import StyledText from 'components/styled-text/StyledText';

class VehicleDetails extends Component {
  componentDidMount() {
    this.props.getVehicleDetails(this.props.match.params.id);
  }

  render() {
    console.log(this.props.vehicleDetails.image_location_list)
    return (
      <DetailContainer>
        <CarouselCard>
        {this.props.vehicleDetails.image_location_list ? <ImageCarousel vehicleImages={this.props.vehicleDetails.image_location_list} /> : <div />}
        </CarouselCard>
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
