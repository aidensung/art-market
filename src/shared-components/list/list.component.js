import React from 'react';

import './list.styles';
import {
	Lists,
	ListContainer,
	ListImg,
	ListPrice,
	ListTitle,
	ListText,
} from './list.styles';

const List = ({ items }) => {
	return (
		<Lists>
			<ListContainer>
				<ListImg src={items.imageURL} alt={items.title} />
				<ListText>
					<ListTitle>{items.title}</ListTitle>
					<ListPrice>{items.price}</ListPrice>
				</ListText>
			</ListContainer>
		</Lists>
	);
};

export default List;
