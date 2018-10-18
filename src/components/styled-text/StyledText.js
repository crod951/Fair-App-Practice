import styled from 'styled-components'

const StyledText = styled.p`
  margin: 0;
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
`;

export default StyledText;
