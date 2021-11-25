import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import {
  // fetchContactsRequest,
  // fetchContactsSuccess,
  // fetchContactsError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,
  changeFilter,
} from './contacts-actions';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';


const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(contacts, {
  [fetchContacts.fulfilled]: (_, {payload})=> payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const loading = createReducer(false, {
//   [fetchContactsRequest]: () => true,
//   [fetchContactsSuccess]: () => false,
//   [fetchContactsError]: () => false,

  // [addContactRequest]: () => true,
  // [addContactSuccess]: () => false,
  // [addContactError]: () => false,
  
  // [deleteContactRequest]: () => true,
  // [deleteContactSuccess]: () => false,
  // [deleteContactError]: () => false,
// });

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
})

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
})