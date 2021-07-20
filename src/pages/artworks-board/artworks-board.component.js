import React, { useState, useEffect } from 'react';
import Card from '../../shared-components/card';
import List from '../../shared-components/list';

import {
	ArtworksHeader,
	FilterIcon,
	Icon,
	IconLeftContainer,
	IconRrightContainer,
	SearchIcon,
	SortIcon,
	ListViewIcon,
	GalleryViewIcon,
	Section,
} from './artworks-board.styles';

const ArtworksBoard = (props) => {
	const items = [
		{
			id: 1,
			artist: 'Grace',
			title: 'Artwork',
			description: 'Awesome work',
			date: 'Jul 18',
			price: '200$',
			imageURL:
				'https://secure.img1-fg.wfcdn.com/im/19498446/resize-h800%5Ecompr-r85/4132/41328885/Starry+Night+by+Vincent+Van+Gogh+-+Print+on+Canvas.jpg',
		},
		{
			id: 2,
			artist: 'Grace2',
			title: 'Artwork2',
			description:
				'This is amazing painting. You are gonna love it! This is amazing painting. You are gonna love it!',
			date: 'Jul 23',
			price: '1200$',
			imageURL:
				'https://secure.img1-fg.wfcdn.com/im/19498446/resize-h800%5Ecompr-r85/4132/41328885/Starry+Night+by+Vincent+Van+Gogh+-+Print+on+Canvas.jpg',
		},
	];
	const [isGalleryView, setIsGalleryView] = useState(true);

	const toggle = () => {
		setIsGalleryView(!isGalleryView);
	};

	useEffect(() => {}, [isGalleryView]);
	return (
		<>
			<ArtworksHeader>
				<IconLeftContainer>
					<Icon>
						<FilterIcon />
					</Icon>
					<Icon>
						<SearchIcon />
					</Icon>
				</IconLeftContainer>
				<IconRrightContainer>
					<Icon>
						<SortIcon />
					</Icon>
					<Icon onClick={toggle}>
						<ListViewIcon isGalleryView={isGalleryView} />
					</Icon>
					<Icon onClick={toggle}>
						<GalleryViewIcon isGalleryView={isGalleryView} />
					</Icon>
				</IconRrightContainer>
			</ArtworksHeader>
			{isGalleryView ? (
				<Section>
					{items.map((item) => (
						<Card items={item} />
					))}
				</Section>
			) : (
				<Section>
					{items.map((item) => (
						<List items={item} />
					))}
				</Section>
			)}
		</>
	);
};

export default ArtworksBoard;
