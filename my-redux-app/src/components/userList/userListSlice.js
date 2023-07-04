import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: []
}


const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
        state.contacts = [...state.contacts, action.payload]
    },
    setContacts: (action) => {
            return action.payload
    },
  },
});
  

export const {addContact, setContacts} = contactsSlice.actions
export const contactReducers = contactsSlice.reducer