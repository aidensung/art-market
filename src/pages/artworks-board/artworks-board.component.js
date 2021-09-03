import React, { useState, useEffect } from 'react';

import List from '../../shared-components/artwork-list';
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

import items from '../../data/dummy_artworks';
import ArtworkItem from '../../shared-components/artwork-gallery';

const ArtworksBoard = (props) => {
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
						<ArtworkItem items={item} />
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
