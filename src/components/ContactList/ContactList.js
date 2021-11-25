import React from 'react';
import PropTypes from 'prop-types';
import {
  // connect,
  useSelector,
  useDispatch
} from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import s from './ContactList.module.css';
export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.TaskList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.TaskList_item}>
          {name} : {number}
          <button
            className={s.TaskList_button}
            onClick={() => dispatch(deleteContact.fulfilled(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

// const mapStateToProps = (state) => ({
//   contacts: getVisibleContacts(state),
// })

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact.fulfilled(id)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);