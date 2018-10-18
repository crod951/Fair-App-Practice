import styled from 'styled-components';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${props => props.column ? 'column' : 'row'};
	flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};
	align-items: ${props => props.align ? props.align : 'flex-start'};
	justify-content: ${props => props.justify ? props.justify : 'flex-start'};
`;

export default FlexContainer;
