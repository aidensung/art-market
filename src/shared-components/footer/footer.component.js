import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./footer.styles.js";

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>Art Market</Heading>
						<FooterLink href="/artworks">Arts</FooterLink>
						<FooterLink href="/jobs">Jobs</FooterLink>
						<FooterLink href="/shop">Shop</FooterLink>
					</Column>
					<Column>
						<Heading>About</Heading>
						<FooterLink href="#">About us</FooterLink>
						<FooterLink href="#">Careers</FooterLink>
						<FooterLink href="#">Contact us</FooterLink>
					</Column>
					<Column>
						<Heading>News</Heading>
						<FooterLink href="#">Magazine</FooterLink>
						<FooterLink href="#">Service</FooterLink>
						<FooterLink href="#">Art</FooterLink>
						<FooterLink href="#">Update</FooterLink>
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
