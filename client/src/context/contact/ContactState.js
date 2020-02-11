import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACT, CLEAR_FILTER } from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [{
      id: 1,
      name: 'Jill Johnson',
      email: 'jill@gmail.com',
      type: 'professional'
    }]
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear filter contacts

  return (
    <ContactContext.Provider value={{
        contacts: state.contacts,
        addContact,
        deleteContact

    }}>
      { props.children }
    </ContactContext.Provider>
  )
}

export default ContactState