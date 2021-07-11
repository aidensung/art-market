import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu,
	Form,
	Input,
	Button,
} from './navbarElement';

const Navbar = (props) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Art Market</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<Form>
						<Input type="text" placeholder="Search" />
						<Button>
							<FaSearch />
						</Button>
					</Form>
					<NavMenu>
						<NavItem>
							<NavLinks to="#">Category</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="#">Location</NavLinks>
						</NavItem>
						<NavBtn>
							<NavBtnLink to="/auth/login">Sign In</NavBtnLink>
						</NavBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
