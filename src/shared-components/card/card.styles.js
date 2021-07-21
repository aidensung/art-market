import { FaMapMarkerAlt } from 'react-icons/fa';

import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: start;
	color: black;
	padding: 20px;
	border-radius: 10px;
	border: 0px;
	border-color: gray;
	border-style: solid;
	transition: 200ms;
	max-width: 380px;
	margin: 10px;
	height: 420px;
	box-shadow: 6px 5px 19px -2px rgba(0, 0, 0, 0.31);
	position: relative;
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

export const Location = styled.div`
	position: absolute;
	bottom: 5px;
	display: flex;
	align-items: center;
`;

export const LocationText = styled.div`
	font-size: small;
`;

export const Icon = styled.span`
	font-size: 1.4rem;
	outline: none;
	transform: translateY(2px);
`;

export const LocationIcon = styled(FaMapMarkerAlt)`
	color: black;
`;
