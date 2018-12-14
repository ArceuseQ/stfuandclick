import axios from 'axios';
import {
  START_SESSION,
  ADD_CLICK,
  SET_SESSIONCLICKS,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE
} from '../constants/actionTypes';

const APIroot = 'https://klikuj.herokuapp.com/api/v1';

export const startSession = (team: string) => {
  return (dispatch: any) => {
    dispatch({
      type: START_SESSION,
      payload: {
        session: {
          session: generateRandomString(12),
          team
        }
      }
    });
  };
};

export const fetchLeaderboard = (selectedTeam = '') => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_TEAMS_REQUEST });

    await axios
      .get(`${APIroot}/leaderboard`)
      .then(response => {
        dispatch({
          type: FETCH_TEAMS_SUCCESS,
          payload: {
            teams: response.data,
            selectedTeam: selectedTeam
          }
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_TEAMS_FAILURE,
          payload: {
            error
          }
        });
      });
  };
};

export const addClick = session => {
  return (dispatch: any) =>
    axios
      .post(`${APIroot}/klik`, {
        team: session.team,
        session: session.session
      })
      .then(response => {
        dispatch({
          type: ADD_CLICK,
          payload: response.data
        });
      });
};

export const setSessionClicks = () => {
  return (dispatch: any) =>
    axios.get(`${APIroot}/leaderboard`).then(response =>
      dispatch({
        type: SET_SESSIONCLICKS,
        payload: response.data
      })
    );
};

const generateRandomString = length => {
  let randomString = '';
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++)
    randomString += charset.charAt(Math.floor(Math.random() * charset.length));

  return randomString;
};
