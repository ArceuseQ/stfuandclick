import * as React from 'react';
import { connect } from 'react-redux';
import TeamEnter from '../components/team/TeamEnter';
import Leaderboard from '../components/team/Leaderboard';
import MainWrapper from '../components/shared/MainWrapper';
import { fetchLeaderboard } from 'src/actions';
import { Team } from 'src/models/Team';

interface HomePageProps {
  teams: Team[];
  isFetching: boolean;
  errorMessage?: string;
  fetchLeaderboard: () => void;
}

interface HomePageState {
  timer: any;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  componentWillMount() {
    this.props.fetchLeaderboard();
  }
  componentDidMount() {
    const timer = setInterval(() => this.props.fetchLeaderboard(), 500);
    this.setState({
      timer
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return (
      <>
        <blockquote>
          <p>It's really simple, you just need to click as fast as you can.</p>
          <cite>anonymous</cite>
        </blockquote>
        <MainWrapper>
          <TeamEnter />
          <Leaderboard
            teams={this.props.teams}
            isFetching={this.props.isFetching}
            errorMessage={this.props.errorMessage}
          />
          <p>Want to be top? STFU and click!</p>
        </MainWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  teams: state.teams.teams,
  isFetching: state.teams.isFetching,
  errorMessage: state.teams.errorMessage
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage as any);
