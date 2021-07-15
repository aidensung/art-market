import styled from "styled-components";

export const StyledUl = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: fixed;
	font-size: 1rem;
	z-index: 1;
	margin: 100;
	top: 5;
	padding-top: 100;
	background-color: #000;
`;

export const StyledLi = styled.li`
	float: left;
`;

export const Dropbtn = styled.div`
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
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
	display: inline-block;
	&:hover {
		background-color: red;
	}
	&:hover ${DropDownContent} {
		display: block;
	}
`;

export const StyledA = styled.a`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		background-color: red;
	}
`;

export const SubA = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: left;
	&:hover {
		background-color: #f1f1f1;
	}
`;
