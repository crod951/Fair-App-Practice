import styled from 'styled-components';

const DetailCard = styled.div`
  margin: 20px;
  padding: 30px;
  width: 100%;
  box-shadow: -1px 3px 7px 0px rgba(0, 0, 0, 0.15);
  margin: 10px 20px;
  position: relative;
  z-index: 100;
  background-color: #FFFFFF;
  border-radius: 10px;

  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  height: ${props => props.loading ? '0' : '100%'}
  opacity: ${props => props.loading ? '0' : '1'}
`;

export default DetailCard
