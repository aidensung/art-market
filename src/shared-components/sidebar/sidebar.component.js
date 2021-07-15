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
} from './sidebarElements';

const Sidebar = (props) => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about">Category</SidebarLink>
					<SidebarLink to="about">Location</SidebarLink>
				</SidebarMenu>
				<SideBtnWarp>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWarp>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
