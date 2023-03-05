import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import contacts from '../../data.json';
import contactStyle from '../Contact/Contact.module.css'

const ContactDetails = (props) => {
    const navigate = useNavigate();
    // const history = useNavigate;
    // console.log(history);
    const {contactId} = useParams();
    // console.log(contactId);
    // console.log(contacts)
    // console.log(props.Prototype.history);
    const contact = props.contacts.find(contact => contact.id === Number(contactId));
    // console.log(contact);
    const {picture, first_name, last_name, gender, email, dob} = contact;
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className={`card card-body mb-3 border-success text-left ${contactStyle.contactBody}`}>
                        <img className='card-img-top' src={picture} style={{width: "70%"}} alt="profilePicture"/>
                        <div className='card-body'>
                            <h5 className='card-title'>Name: {first_name} {last_name}</h5>
                            <p className='card-text mb-0'>Gender: {gender}</p>
                            <p className='card-text mb-0'>Email: {email}</p>
                            <p className='card-text'>Birth Date: {dob}</p>
                            <button onClick={() => navigate(-1)} className='btn btn-dark' style={{widt: "85%"}}>Go Back</button>
                            {/* <Link to={`"/contact/"${id}`}>
                                <button className='btn btn-success'>View</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;