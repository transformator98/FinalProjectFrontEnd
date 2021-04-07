import { createAction } from '@reduxjs/toolkit';

export const addStart = createAction('contacts/ADD_START');
export const addSuccess = createAction('contacts/ADD_SUCCESS');
export const addError = createAction('contacts/ADD_ERROR');

export const deleteStart = createAction('contacts/DELETE_START');
export const deleteSuccess = createAction('contacts/DELETE_SUCCESS');
export const deleteError = createAction('contacts/DELETE_ERROR');

export const fetchStart = createAction('contacts/FETCH_START');
export const fetchSuccess = createAction('contacts/FETCH_SUCCESS');
export const fetchError = createAction('contacts/FETCH_ERROR');
