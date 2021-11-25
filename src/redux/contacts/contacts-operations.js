import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
    // fetchContactsRequest,
    // fetchContactsSuccess,
    // fetchContactsError,
    // addContactError,
    // addContactRequest,
    // addContactSuccess,
    // deleteContactError,
    // deleteContactRequest,
    // deleteContactSuccess,
// } from './contacts-actions';

axios.defaults.baseURL = 'https://6196b1abaf46280017e7e242.mockapi.io/';

// const fetchContacts = () => dispatch => {
//     dispatch(fetchContactsRequest())
//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//         .catch(error => dispatch(fetchContactsError(error)))
// }
const fetchContacts = createAsyncThunk(
    'contact/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contact');
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

// const addContact = ({ name, number }) => dispatch => {
//     dispatch(addContactRequest());
//     axios
//         .post('/contacts', ({ name, number }))
//         .then(({ data }) => dispatch(addContactSuccess(data)))
//         .catch(error => dispatch(addContactError(error)));
// };
const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact, {rejectWithValue}) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);


// const deleteContact = id => dispatch => {
//     dispatch(deleteContactRequest());
//     axios
//         .delete(`/contacts/${id}`)
//         .then(() => dispatch(deleteContactSuccess(id)))
//         .catch(error => dispatch(deleteContactError(error)))
// };
const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async ( contactId, {rejectWithValue} ) => {
        try {
            const {data: {id}} = await axios.delete(`/contacts/${contactId}`);
            return id;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export { addContact, deleteContact, fetchContacts };