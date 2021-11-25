import { createAction } from '@reduxjs/toolkit';

// const fetchContactsRequest = createAction('contact/ContactsRequest');
// const fetchContactsSuccess = createAction('contact/ContactsSuccess');
// const fetchContactsError = createAction('contact/ContactsError');

// const addContactRequest = createAction('contact/addContactRequest');
// const addContactSuccess = createAction('contact/addContactSuccess');
// const addContactError = createAction('contact/addContactError');

// const deleteContactRequest = createAction('contact/deleteContactRequest');
// const deleteContactSuccess = createAction('contact/deleteContactSuccess');
// const deleteContactError = createAction('contact/deleteContactError');

const changeFilter = createAction('contact/filter');

export {
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
};