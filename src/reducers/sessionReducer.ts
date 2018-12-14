import {
  START_SESSION,
  ADD_CLICK,
  SET_SESSIONCLICKS
} from '../constants/actionTypes';
import { getTeamOrder } from './teamReducer';
import { Team } from 'src/models/Team';

const session = (state = null, action: any) => {
  switch (action.type) {
    case START_SESSION:
      return {
        ...action.payload.session
      };
    case SET_SESSIONCLICKS:
      return {
        session: state.session,
        team: state.team,
        yourClicks: 0,
        teamClicks: getTeamClicks(state.team, action.payload)
      };
    case ADD_CLICK:
      return {
        ...state,
        yourClicks: action.payload.your_clicks,
        teamClicks: action.payload.team_clicks
      };
    default:
      return state;
  }
};

export default session;

const getTeamClicks = (team: string, teamList: Team[]) => {
  const teamOrder = getTeamOrder(team, teamList);

  if (teamOrder < 0) {
    return 0;
  }

  return teamList[teamOrder].clicks;
};
