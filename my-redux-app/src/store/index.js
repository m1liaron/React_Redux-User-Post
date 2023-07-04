import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from '../components/userList/userListSlice';

export const store = configureStore({
  reducer:{
    contacts: contactReducers,
  }
});