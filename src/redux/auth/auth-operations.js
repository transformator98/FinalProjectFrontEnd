import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const responce = await axios.post('/auth/register', credentials);

    dispatch(authActions.registerSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/auth/login', credentials);

    token.set(responce.data.token);

    dispatch(authActions.loginSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = currentToken => async dispatch => {
  try {
    dispatch(authActions.logOutRequest());
    //заработает когда будет авторизация
    // await axios.post('auth/logout');
    await axios({
      url: 'http://localhost:3030/auth/logout',
      method: 'post',
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error.message));
  }
};

const requestToMongo = accessToken => async dispatch => {
  try {
    dispatch(authActions.googleAuthRequest());

    await axios({
      url: 'http://localhost:3030/auth/user',
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(({ data }) => dispatch(authActions.googleAuthSuccess(data)))
      .catch(error => dispatch(authActions.googleAuthError(error.message)));
  } catch (error) {
    console.log(error);
  }
};

const operations = {
  register,
  logIn,
  logOut,
  requestToMongo,
};
export default operations;
