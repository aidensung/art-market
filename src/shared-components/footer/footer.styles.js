import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Box = styled.div`
	background: black;
	position: relative;
	height: auto;
	width: 100%;
	padding-top: 18px;
	padding-bottom: 18px;
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 800px;
	margin: 0 auto;
	margin-bottom: auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: right;
	align-content: center;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 15px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 15px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const FooterA = styled(LinkRouter)`
	color: #fff;
	margin-bottom: 20px;
	font-size: 15px;
	text-decoration: none;
`;

export const Heading = styled.p`
	font-size: 20px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
