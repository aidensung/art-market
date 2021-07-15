import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarLink,
	SideBtnWarp,
	SidebarRoute,
	SidebarMenu,
} from './sidebar.styles.';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="#">Category</SidebarLink>
					<SidebarLink to="#">Location</SidebarLink>
				</SidebarMenu>
				<SideBtnWarp>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWarp>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
