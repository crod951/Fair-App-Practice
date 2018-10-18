import styled from 'styled-components';

const VehicleCard = styled.div`
  box-shadow: -1px 3px 15px 0px rgba(0, 0, 0, 0.25);
  margin: 8px;
  padding: 15px;
	position: relative;
  border-radius: 10px;
  background: #F8F8F8;
  cursor: pointer;

  transition: all 450ms cubic-bezier(0.25, 1, 0.35, 1) 0ms;

  :hover {
    box-shadow: -1px 5px 30px 2px rgba(0, 0, 0, 0.35);
  }
`;

export default VehicleCard
