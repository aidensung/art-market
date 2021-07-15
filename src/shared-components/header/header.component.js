import React from "react";

import {
	StyledUl,
	// StyledLi,
	// StyledA,
	Dropbtn,
	DropDownContent,
	DropDownLi,
	SubA,
} from "./header.styles";

const handleClick = (action) => {
	if (!action) return;

	if (this.props.onClick) this.props.onClick(action);
};

const Header = (props) => {
	return (
		<StyledUl>
			<DropDownLi>
				<Dropbtn onClick={() => handleClick("DropDown")}>ARTS</Dropbtn>
				<DropDownContent>
					{" "}
					<SubA onClick={() => handleClick("Link1")}>Link 1</SubA>
					<SubA onClick={() => handleClick("Link2")}>Link 2</SubA>
					<SubA onClick={() => handleClick("Link3")}>Link 3</SubA>
				</DropDownContent>
			</DropDownLi>
			<DropDownLi>
				<Dropbtn onClick={() => handleClick("DropDown")}>JOBS</Dropbtn>
				<DropDownContent>
					{" "}
					<SubA onClick={() => handleClick("Link1")}>Link 1</SubA>
					<SubA onClick={() => handleClick("Link2")}>Link 2</SubA>
					<SubA onClick={() => handleClick("Link3")}>Link 3</SubA>
				</DropDownContent>
			</DropDownLi>
			<DropDownLi>
				<Dropbtn onClick={() => handleClick("DropDown")}>SHOP</Dropbtn>
				<DropDownContent>
					{" "}
					<SubA onClick={() => handleClick("Link1")}>Link 1</SubA>
					<SubA onClick={() => handleClick("Link2")}>Link 2</SubA>
					<SubA onClick={() => handleClick("Link3")}>Link 3</SubA>
				</DropDownContent>
			</DropDownLi>
		</StyledUl>
	);
};

export default Header;
