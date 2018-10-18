import styled from 'styled-components';

const GradientBackground = styled.div`
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffa172+0,ffe1d1+20,ffffff+100,ffe1d1+100 */
background: #ff5c06; /* Old browsers */
background: -moz-linear-gradient(top, #ff5c06 0%, #ffe1d1 20%, #ffffff 100%, #ffe1d1 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #ff5c06 0%,#ffe1d1 20%,#ffffff 100%,#ffe1d1 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #ff5c06 0%,#ffe1d1 20%,#ffffff 100%,#ffe1d1 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff5c06', endColorstr='#ffe1d1',GradientType=0 ); /* IE6-9 */

    height: 100%;
  	width: 100%;
  	position: absolute;
    z-index: -1;
}
`;

export default GradientBackground;
