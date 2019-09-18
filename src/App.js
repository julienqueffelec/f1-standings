import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './components/Title';
import {
	Wrapper,
	Position,
	Points,
	Code,
	Name,
	FamilyName,
	Constructors
} from './components/Styles';
import './App.css';

const Appli = styled.div`
	margin: 20px auto;
`;

const App = props => {
	const [standings, setStandings] = useState('');

	useEffect(() => {
		let didCancel = false;

		async function fetchData() {
			const TwitchAPI = axios.create({
				baseURL: 'https://ergast.com/api/f1/current/driverStandings.json'
			});
			const response = await TwitchAPI.get();
			if (!didCancel) {
				setStandings(
					response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
				);
			}
		}

		fetchData();

		return () => {
			didCancel = true;
		};
	}, []);

	const renderStreams = standings.length
		? standings.map((standing, index) => {
				return (
					<Wrapper key={standing.position}>
						<Position>{standing.position}</Position>
						<Points>{standing.points}</Points>
						<Code>{standing.Driver.code}</Code>
						<Name>{standing.Driver.givenName}</Name>
						<FamilyName>{standing.Driver.familyName}</FamilyName>
						<Constructors>{standing.Constructors[0].name}</Constructors>
					</Wrapper>
				);
		  })
		: '';

	return (
		<Appli>
			<Title></Title>
			<div>{renderStreams}</div>
		</Appli>
	);
};

export default App;
