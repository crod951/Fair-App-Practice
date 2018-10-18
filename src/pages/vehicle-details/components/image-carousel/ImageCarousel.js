import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background-color: #FFFFFF;
`;

const Image = styled.img`
  height: 100%;
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
