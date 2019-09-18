import React from 'react';
import styled from 'styled-components';
import { Position, Points, Code, Name, FamilyName, Constructors } from './Styles';

const HeadTitle = styled.div`
	display: flex;
	max-width: 800px;
	background-color: #f78670;
	margin: 0 auto;
	padding: 10px;
`;
const Title = props => {
	return (
		<HeadTitle>
			<Position></Position>
			<Points>Points</Points>
			<Code>Code</Code>
			<Name>Prénom</Name>
			<FamilyName>Nom</FamilyName>
			<Constructors>Constructeurs</Constructors>
		</HeadTitle>
	);
};

export default Title;
