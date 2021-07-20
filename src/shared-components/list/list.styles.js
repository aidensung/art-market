import styled from 'styled-components';

export const Lists = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
`;

export const ListContainer = styled.div`
	width: 80%;
	margin: 5px;
	display: flex;
	align-items: center;
	box-shadow: 6px 5px 19px -2px rgba(0, 0, 0, 0.31);
`;

export const ListImg = styled.img`
	width: 100px;
	height: auto;
`;

export const ListText = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const ListTitle = styled.span`
	font-size: large;
`;
export const ListPrice = styled.span`
	font-size: small;
`;
