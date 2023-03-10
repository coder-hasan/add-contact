import axios from 'axios';
// import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
    const {contactId} = useParams();
    const [editContact, setEditContact] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": "",
        "picture": "",
        "success": false,
        "error": ""
    });
    useEffect(() => {
        axios.get(`http://localhost:4000/contacts/${contactId}`)
            .then(({data}) => setEditContact(data));
    },[contactId]);
    const handleChange = (event) => {
        const newContactInfo = {...editContact};
        newContactInfo[event.target.name] = event.target.value
        setEditContact(newContactInfo);
    };
    const handleBlurChange =(event) => {
        let isFieldValid = true;
        if(event.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(isFieldValid){
            const newContactInfo = {...editContact};
            newContactInfo[event.target.name] = event.target.value
            setEditContact(newContactInfo);
        }
    }
    const handleEmailChange = (event) => {
        handleBlurChange(event);
    }
    const history = useNavigate();
    const handleFormSubmit = (e) => {
        const {first_name, last_name, gender, picture} = editContact;
        e.preventDefault();
        if(first_name === '' || last_name === '' || gender === '' || picture === ''){
            setEditContact({
                error: "Please Fill All Inforrmation with Valid Info"
            })
        }else{
            console.log(editContact);
            editContact.success = true;
            axios.put(`http://localhost:4000/contacts/${contactId}`, {
                first_name, 
                last_name,
                email, 
                gender, 
                picture
            }).then(data => {
                console.log(data)
                history('/contacts');
            }).catch(err => console.log(err))
        }
        
    }
    const {picture, first_name, last_name, gender, email} = editContact;
    return (
        <>        
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-3'>
                        <h2 className='text-center mb-3'>Edit This Contact</h2>
                        {
                            editContact.success && <div className='alert alert-success'>{first_name} {last_name} Successfully</div>
                        }
                        {
                            editContact.error && <div className='alert alert-danger'>{editContact.error}</div>
                        }
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input onChange={handleChange} value={first_name} required type="text" name='first_name' className="form-control" placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input onChange={handleChange} value={last_name} required type="text" name='last_name' className="form-control" placeholder="Enter last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input onBlur={handleBlurChange} onChange={handleEmailChange} defaultValue={email} required type="email" name='email' className="form-control" placeholder="Enter your email" />
                            </div>
                            {/* <div className="form-group">
                                <DatePicker selected={dob} className="form-control" defaultValue={dob}></DatePicker>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="picture">Picture URL</label>
                                <input onChange={handleChange} value={picture} required type="url" name='picture' className="form-control" placeholder="Your Photo URL" />
                            </div>
                            <select onChange={handleChange} value={gender} required name='gender' className="form-select form-group" aria-label="Default select example">
                                <option value="" disabled>Select Gender</option>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditContact;