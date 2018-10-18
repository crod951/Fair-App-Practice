import styled from 'styled-components'

const ColorText = styled.div`
  color: #ff5c06;
  margin: 0;
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : ''};
`;

export default ColorText;
