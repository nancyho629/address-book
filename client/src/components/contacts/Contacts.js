import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    // access to actions associated with contactContext
    // acess ContactState method in Contact
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext

  return (
    <Fragment>
      {contacts.map(contact => <ContactItem contact={contact} key={contact.id}/>)}
    </Fragment>
  )
}

export default Contacts
