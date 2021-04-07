import { addError, deleteError } from './contacts-actions';

import { deleteContact, addContact, getContacts } from './contacts-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const contactsSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [addContact.fulfilled](state, action) {
      state.data.push(action.payload);
    },
    [addContact.pending](state, action) {},
    [addError.fulfilled](state, action) {},
    [deleteContact.fulfilled](state, action) {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
    [deleteError.fulfilled](state, action) {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
    [getContacts.fulfilled](state, action) {
      state.data = action.payload;
    },
  },
});

export default contactsSlice.reducer;
