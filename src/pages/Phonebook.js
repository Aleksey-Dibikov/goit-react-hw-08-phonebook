import {
  // connect,
  useSelector,
  useDispatch,
} from 'react-redux';

import ContactList from '../components/ContactList/ContactList';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import Filter from '../components/Filter/Filter';

import { fetchContacts } from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selector';


export function Phonebook() {
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Phonebook</h1>
            <ContactsForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList
                onFetchContacts={() => dispatch(fetchContacts.fulfilled())}
            />
            {isLoading && <h1>loading ...</h1>}
        </>
    )
}