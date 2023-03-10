import React from 'react';
import { Link } from 'react-router-dom';

import contactStyle from './Contact.module.css'

const Contact = (props) => {
    // console.log(props.contact);
    const { first_name, last_name, email, id} = props.contact;
    return (
        <div className={`card card-body d-flex flex-column mb-3 border-success align-items-center ${contactStyle.contactBody}`} style={{width: "350px"}}>
            {/* <img className='card-img-top' src={picture} style={{width: "70%"}} alt="profilePicture"/> */}
            <div className='card-body' style={{width: "90%"}}>
                <h5 className='card-title'>Name: {first_name} {last_name}</h5>
                {/* <p className='card-text mb-0'>Gender: {gender}</p> */}
                <p className='card-text'>Email: {email}</p>
                <Link to={"/contacts/"+id}>
                    <button className='btn btn-success'>View</button>
                </Link>
                {/* <Link to={`"/contact/"${id}`}>
                    <button className='btn btn-success'>View</button>
                </Link> */}
            </div>
        </div>
    );
};

export default Contact;