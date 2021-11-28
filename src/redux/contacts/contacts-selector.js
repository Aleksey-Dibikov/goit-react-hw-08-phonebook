import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (allContacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return allContacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    }
);

export { getLoading, getFilter, getVisibleContacts };