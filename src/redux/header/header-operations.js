import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://intense-stream-90411.herokuapp.com';

export const addContact = createAsyncThunk(
  'contacts/ADD_SUCCESS',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(100);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/DELETE_SUCCESS',
  async (credentials, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${credentials}`);
      return credentials;
    } catch (error) {
      return thunkAPI.rejectWithValue(200);
    }
  },
);

export const getContacts = createAsyncThunk(
  'contacts/FETCH_SUCCESS',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(100);
    }
  },
);
