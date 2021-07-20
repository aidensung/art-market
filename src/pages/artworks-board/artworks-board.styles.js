import {
	FaFilter,
	FaSearch,
	FaSortAlphaDown,
	FaList,
	FaThLarge,
} from 'react-icons/fa';
import styled from 'styled-components';

export const ArtworksHeader = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2px;
	margin-top: 60px;
	box-shadow: 0 4px 6px -6px #222;
`;

export const IconLeftContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100px;
`;

export const IconRrightContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100px;
	position: relative;
`;

export const Icon = styled.div`
	font-size: 1.5rem;
	cursor: pointer;
	outline: none;
`;

export const FilterIcon = styled(FaFilter)`
	color: black;
`;

export const SearchIcon = styled(FaSearch)`
	color: black;
`;

export const SortIcon = styled(FaSortAlphaDown)`
	color: black;
`;

export const ListViewIcon = styled(FaList)`
	color: black;
	display: ${({ isGalleryView }) => (isGalleryView ? 'block' : 'none')};
	position: absolute;
	right: 20px;
`;

export const GalleryViewIcon = styled(FaThLarge)`
	color: black;
	display: ${({ isGalleryView }) => (isGalleryView ? 'none' : 'block')};
	position: absolute;
	right: 20px;
`;

// Main section

export const Section = styled.div`
	display: flex;
	height: 1000px;
	margin: 20px;
`;
