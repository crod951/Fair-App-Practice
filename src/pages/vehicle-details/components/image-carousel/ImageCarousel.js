import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Image from '../image/Image';

const ImageDiv = styled.div`
  background-color: #FFFFFF;
`;

const ImageCarousel = (props) => {
  return (
    <Carousel showStatus={false} showThumbs={false} useKeyboardArrows={true}>
      {props.vehicleImages.map((image, index) => (
        <ImageDiv key={index}>
          <Image src={image} alt="" />
        </ImageDiv>
      ))}
    </Carousel>
  );
}

export default ImageCarousel
