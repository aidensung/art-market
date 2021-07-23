import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	FooterA,
	Heading,
} from "./footer.styles.js";

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>Art Market</Heading>
						<FooterA to="/artworks">Arts</FooterA>
						<FooterA to="/jobs">Jobs</FooterA>
						<FooterA to="/shop">Shop</FooterA>
					</Column>
					<Column>
						<Heading>About</Heading>
						<FooterA to="/about">About us</FooterA>
						<FooterA to="/careers">Careers</FooterA>
						<FooterA to="/contact">Contact us</FooterA>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>Instagram</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>Twitter</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>Youtube</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
