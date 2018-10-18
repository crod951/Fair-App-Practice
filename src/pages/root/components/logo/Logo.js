import styled from 'styled-components'
import logoImage from './FAIR_LOGO_2X.png';

const Logo = styled.img.attrs({
    src: logoImage
})`
  width: 50px;

  :hover {
    cursor: pointer;
  }
`;

export default Logo;
