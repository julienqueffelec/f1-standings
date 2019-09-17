import React, { Component } from 'react';
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

class App extends Component {
	state = {
		standings: []
	};
	componentDidMount = async () => {
		const TwitchAPI = axios.create({
			baseURL: 'https://ergast.com/api/f1/current/driverStandings.json'
		});
		const response = await TwitchAPI.get();
		this.setState({
			standings:
				response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
		});
	};
	render() {
		const { standings } = this.state;

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
	}
}

export default App;
