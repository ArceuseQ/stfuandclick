import * as React from 'react';
import TeamRow from './TeamRow';
import { Team } from '../../models/Team';
import Ribbon from '../shared/Ribbon';
import TeamList from './TeamList';

interface LeaderboardProps {
  teams: Team[];
  selectedTeam?: string;
  isFetching: boolean;
  errorMessage?: string;
}

interface LeaderboardState {
  isLoading: boolean;
}

export default class Leaderboard extends React.Component<
  LeaderboardProps,
  LeaderboardState
> {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  componentWillMount() {
    if (this.props.isFetching) {
      setTimeout(() => this.setState({ isLoading: true }), 1000);
    }
  }

  renderTeams() {
    const rows: JSX.Element[] = [];
    const count = this.props.selectedTeam ? 7 : 10;

    for (let index = 0; index < count; index++) {
      const team = this.props.teams[index];
      const isActive = team && team.team === this.props.selectedTeam;
      rows.push(<TeamRow key={index} team={team} active={isActive} />);
    }

    return rows;
  }

  render() {
    return (
      <div>
        {!this.props.selectedTeam && (
          <Ribbon element={<h2 />} text='TOP 10 Clickers' />
        )}
        <TeamList
          rows={this.renderTeams()}
          isFetching={this.state.isLoading}
          errorMessage={this.props.errorMessage}
        />
      </div>
    );
  }
}
