import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Card from '../ui-element/card';

import './artwork-gallery.styles.scss';

const ArtworkGallery = ({ items }) => {
	return (
		<Card className='artwork-item'>
			<img
				className='artwork-item__img'
				src={items.imageURL}
				alt={items.title}
			/>
			<div className='artwork-item__header'>
				<h1 className='artwork-item__title'>{items.title}</h1>
				<span className='artwork-item__price'>{items.price}</span>
			</div>
			<p className='artwork-item__description'>{items.description}</p>
			<div className='artwork-item__location'>
				<span className='artwork-item__icon'>
					<FaMapMarkerAlt />
				</span>
				<div className='artwork-item__location-text'>{items.location}</div>
			</div>
		</Card>
	);
};

export default ArtworkGallery;
