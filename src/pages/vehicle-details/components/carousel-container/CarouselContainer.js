import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  height: ${props => props.loading ? '0' : '100%'}
  opacity: ${props => props.loading ? '0' : '1'}
`;

export default CarouselContainer
