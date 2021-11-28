import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6196b1abaf46280017e7e242.mockapi.io/';

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