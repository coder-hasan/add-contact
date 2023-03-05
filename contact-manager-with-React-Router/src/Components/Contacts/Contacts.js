import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from '../Contact/Contact';
// import contacts from "../../data.json";


const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/contacts')
        .then(data => setContacts(data.data))
        
    }, []);
    // const {contacts} = props.contacts;

    return (
        <div className='d-flex align-items-center flex-column'>
            {contacts.map(contact => <Contact contact={contact} key={contact.id}></Contact>)}
        </div>
    );
};

export default Contacts;