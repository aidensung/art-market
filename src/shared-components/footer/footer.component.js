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
			<h1 style={{ color: "green", textAlign: "center", marginTop: "-60px" }}>
				Art Market(image)
			</h1>
			<Container>
				<Row>
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
						<Heading>More</Heading>
						<FooterLink href="#">Shop</FooterLink>
						<FooterLink href="#">Jobs</FooterLink>
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
