import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';
import { error, Stack } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.width = '400px';
const myStack = new Stack({
  modal: false,
  dir1: 'down',
  firstpos1: 0,
  spacing1: 0,
  push: 'top',
  maxOpen: Infinity,
});

axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

// http://localhost:3030 не видаляти, необхідно для проведення тестів
// axios.defaults.baseURL = 'http://localhost:3030';

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
  } catch (e) {
    dispatch(authActions.registerError(e.message));

    if (e.response.data.code === 409) {
      error({
        text: 'User already exists',
        type: 'error',
        stack: myStack,
      });
    }
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const responce = await axios.post('/auth/login', credentials);

    token.set(responce.data.token);

    dispatch(authActions.loginSuccess(responce.data));
  } catch (e) {
    dispatch(authActions.loginError(e.message));

    if (e.response.data.code === 401) {
      error({
        text: 'Email or password is wrong.',
        type: 'error',
        stack: myStack,
      });
    }
  }
};

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (e) {
    if (e.response.data.code === 204) {
      error({
        text: 'Check connection!',
        type: 'error',
        stack: myStack,
      });
    }
  }
});

const requestToMongo = createAsyncThunk(
  'auth/googleAuth',
  async accessToken => {
    try {
      const { data } = await axios({
        url: '/auth/user',
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const localstoragedToken = state.user.token;
    if (localstoragedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(localstoragedToken);

    try {
      const { data } = await axios.get('/auth/user');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const operations = {
  register,
  logIn,
  logout,
  requestToMongo,
  fetchCurrentUser,
};
export default operations;
