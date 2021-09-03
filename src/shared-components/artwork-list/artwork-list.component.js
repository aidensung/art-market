import React from 'react';

import Card from '../ui-element/card';

import './artwork-list.styles.scss';

const ArtworkList = ({ items }) => {
	return (
		<Card className='artwork-list'>
			<div className='artwork-list__container'>
				<img
					className='artwork-list__img'
					src={items.imageURL}
					alt={items.title}
				/>
				<div className='artwork-list__description'>
					<span className='artwork-list__title'>{items.title}</span>
					<span className='artwork-list__price'>{items.price}</span>
				</div>
			</div>
		</Card>
	);
};

export default ArtworkList;
