import React from 'react';

import {
	CardContainer,
	CardHeader,
	CardProfile,
	CardSpan,
	CardTitleGroup,
	CardTitle,
	CardImg,
	CardPrice,
	CardText,
} from './card.styles';

const Card = ({ items }) => {
	console.log(items);
	return (
		<CardContainer>
			<CardImg src={items.imageURL} alt={items.title} />
			<CardHeader>
				<CardTitle>{items.title}</CardTitle>
				<CardPrice>{items.price}</CardPrice>
			</CardHeader>
			<CardText>{items.description}</CardText>
		</CardContainer>
	);
};

export default Card;
