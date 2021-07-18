import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	padding: 20px;
	border-radius: 10px;
	border: 0px;
	border-color: gray;
	border-style: solid;
	transition: 200ms;
	max-width: 380px;
	margin: 10px;
	height: 380px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	align-items: center;
	margin: 5px;
`;

export const CardTitle = styled.h1`
	flex: 0.5;
	font-size: large;
	margin-bottom: 0;
	margin-top: 0;
`;

export const CardImg = styled.img`
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const CardPrice = styled.span`
	font-size: small;
`;

export const CardText = styled.p`
	margin: 5px;
	font-size: small;
`;
