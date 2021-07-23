import React from "react";

import {
	HeaderDiv,
	HeaderMenuUl,
	HeaderLi,
	DropDownbtn,
	DropDownContent,
	DropDownLi,
	SubA,
	HeaderA,
} from "./header.styles";

const Header = (toggle) => {
	return (
		<HeaderDiv>
			<HeaderMenuUl>
				<HeaderLi>
					<HeaderA to="/">HOME</HeaderA>
				</HeaderLi>
				<DropDownLi>
					<DropDownbtn>ARTS</DropDownbtn>
					<DropDownContent>
						{" "}
						<SubA>Link 1</SubA>
						<SubA>Link 2</SubA>
						<SubA>Link 3</SubA>
					</DropDownContent>
				</DropDownLi>
				<DropDownLi>
					<DropDownbtn>JOBS</DropDownbtn>
					<DropDownContent>
						{" "}
						<SubA>Link 1</SubA>
						<SubA>Link 1</SubA>
						<SubA>Link 1</SubA>
						<SubA>Link 1</SubA>
						<SubA>Link 2</SubA>
						<SubA>Link 3</SubA>
					</DropDownContent>
				</DropDownLi>
				<DropDownLi>
					<DropDownbtn>SHOP</DropDownbtn>
					<DropDownContent>
						{" "}
						<SubA>Link 1</SubA>
						<SubA>Link 2</SubA>
						<SubA>Link 3</SubA>
					</DropDownContent>
				</DropDownLi>
			</HeaderMenuUl>
		</HeaderDiv>
	);
};

export default Header;
