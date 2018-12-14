import {
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_FAILURE
} from '../constants/actionTypes';
import { Team } from 'src/models/Team';

const initState = {
  teams: [],
  isFetching: false
};

const teams = (state = initState, action: any) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_TEAMS_SUCCESS:
      return {
        isFetching: false,
        teams: getLeaderboard(action.payload.selectedTeam, action.payload.teams)
      };
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.error.message
      };
    default:
      return state;
  }
};

export default teams;

export const getTeamOrder = (team: string, teamList: Team[]) => {
  return teamList.findIndex(t => {
    return t.team === team;
  });
};

export const getLeaderboard = (selectedTeam: string, teamList: Team[]) => {
  if (selectedTeam) {
    const selectedTeamOrder = getTeamOrder(selectedTeam, teamList);

    if (selectedTeamOrder === teamList.length - 1) {
      // If selected team is last in the team list => return selected team and 6 teams before it
      return teamList.filter(({ order }) => order >= selectedTeamOrder - 5);
    } else if (selectedTeamOrder - 3 < 0) {
      // If selected teams order is less than 3 => return teams before it and remaining teams up to count of 7
      return teamList.filter(
        ({ order }) =>
          order >= selectedTeamOrder - 2 &&
          order <= selectedTeamOrder + 2 - (selectedTeamOrder - 5)
      );
    }

    return teamList.filter(
      // If team is in the middle and can have 3 teams before and after it
      ({ order }) =>
        order >= selectedTeamOrder - 2 && order <= selectedTeamOrder + 4
    );
  } else {
    // Return top 10 teams
    return teamList.slice(0, 10);
  }
};
