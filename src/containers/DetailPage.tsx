import * as React from 'react';
import styledComponents from 'styled-components';
import MainWrapper from '../components/shared/MainWrapper';
import Input from '../components/shared/Form/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  startSession,
  addClick,
  fetchLeaderboard,
  setSessionClicks
} from 'src/actions';
import Leaderboard from 'src/components/team/Leaderboard';
import TeamClicks from 'src/components/team/TeamClicks';
import { Session } from 'src/models/Session';
import { Team } from 'src/models/Team';

interface DetailPageProps {
  match: any;
  startSession: (team: string) => void;
  setSessionClicks: () => void;
  addClick: (session: Session) => void;
  selectedTeam: string;
  session: Session;
  teams: Team[];
  isFetching: boolean;
  errorMessage?: string;
  fetchLeaderboard: (team: string) => void;
}

interface DetailPageState {
  timer: any;
}

class DetailPage extends React.Component<DetailPageProps, DetailPageState> {
  componentWillMount() {
    this.props.startSession(this.props.match.params.team);
    this.props.setSessionClicks();
    this.props.fetchLeaderboard(this.props.match.params.team);
  }

  componentDidMount() {
    const timer = setInterval(
      () => this.props.fetchLeaderboard(this.props.match.params.team),
      500
    );
    this.setState({
      timer
    });
  }

  componentWillReceiveProps(nextProps) {
    // If the active team is being loaded for the first time and session is set in nextProps => add first click to show team in Leaderboard
    if (
      nextProps.session !== null &&
      nextProps.session.teamClicks === 0 &&
      nextProps.session !== this.props.session
    ) {
      this.props.addClick(nextProps.session);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  handleClick = () => {
    this.props.addClick(this.props.session);
  }

  render() {
    const name = this.props.match.params.team;

    return (
      <>
        <h2>
          Clicking for team <b>{name}</b>
        </h2>
        <InlineParagraph>
          Too lazy to click? Let your pals click for you:
        </InlineParagraph>
        <InlineInput type='text' readOnly value={`stfuandclick.com/${name}`} />

        <MainWrapper>
          {this.props.session && (
            <TeamClicks
              session={this.props.session}
              handleClick={() => this.props.addClick(this.props.session)}
            />
          )}

          <Leaderboard
            teams={this.props.teams}
            selectedTeam={this.props.match.params.team}
            isFetching={this.props.isFetching}
            errorMessage={this.props.errorMessage}
          />

          <p>Want to be top? STFU and click!</p>
        </MainWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    teams: state.teams.teams,
    session: state.session,
    isFetching: state.teams.isFetching,
    errorMessage: state.teams.errorMessage
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    { fetchLeaderboard, startSession, addClick, setSessionClicks },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

const InlineParagraph = styledComponents.p`
  @media screen and (min-width: 750px) {
    display: inline-block;
  }
`;

const InlineInput = styledComponents(Input)`
  @media screen and (min-width: 750px) {
    width: 185px;
    margin-left: 8px;
    display: inline-block;
  }
`;
