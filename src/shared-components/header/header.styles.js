import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	top: 80px;
	width: 100%;
	position: sticky;
	background-color: #000;
	z-index: 10;
`;
export const HeaderMenuUl = styled.ul`
	color: #fff;
`;

export const HeaderLi = styled.li`
	float: left;
	list-style-type: none;
`;

export const DropDownbtn = styled.button`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
`;

export const DropDownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	left: 0;
	width: 100%;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

export const DropDownLi = styled(HeaderLi)`
	display: inline-block;
	&:touch-action {
		background-color: red;
	}
	&:hover ${DropDownContent} {
		display: block;
	}
`;

export const HeaderA = styled(LinkRouter)`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		background-color: red;
	}
`;

export const SubA = styled.div`
	float: left;
	width: 33.33%;
	color: black;
	padding: 12px;
	text-decoration: none;
	display: block;
	&:hover {
		background-color: #f1f1f1;
	}
`;

export const SubB = styled.a`
	float: none;
	color: black;
	padding: 16px;
	text-decoration: none;
	display: block;
	text-align: left;
	&:hover {
		background-color: #f1f1f1;
	}
`;
