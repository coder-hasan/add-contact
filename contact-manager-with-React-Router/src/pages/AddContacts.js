import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { redirect, useNavigate } from 'react-router-dom';

const AddContacts = () => {
    const [addContact, setAddContact] = useState({
        // "id": 1,
        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": "",
        "dob": new Date(),
        "picture": "",
        "error": ""
    });
    const handleBlurChange =(event) => {
        let isFieldValid = true;
        if(event.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        // console.log(isFieldValid, event.target.value);
        }
        if(isFieldValid){
            const newContactInfo = {...addContact};
            newContactInfo[event.target.name] = event.target.value
            setAddContact(newContactInfo);
        }
    }
    const handleEmailChange = (event) => {
        // let isFieldValid = true;
        // if(event.target.name === 'email'){
        // isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        // console.log(isFieldValid, event.target.value);
        // }
        // if(isFieldValid){
        //     const newContactInfo = {...addContact};
        //     newContactInfo[event.target.name] = event.target.value
        //     setAddContact(newContactInfo);
        // }
        handleBlurChange(event);
    }
    const handleChange = (event) => {
        const newContactInfo = {...addContact};
        newContactInfo[event.target.name] = event.target.value
        setAddContact(newContactInfo);
    };
    const handleDateChange = (date) =>{
        const newContactInfo = {...addContact};
        newContactInfo[dob] = date;
        setAddContact(newContactInfo);
        // setAddContact({
        //     dob: date
        // });
    }
    const history = useNavigate();
    const handleFormSubmit = (e) => {
        const {first_name, last_name, gender, dob, picture} = addContact;
        e.preventDefault();
        if(first_name === '' || last_name === '' || gender === '' || dob === '' || picture === ''){
            setAddContact({
                error: "Please Fill All Inforrmation with Valid Info"
            })
        }else{
            console.log(addContact);
            axios.post("http://localhost:4000/contacts", {
                first_name, 
                last_name,
                email, 
                gender, 
                dob, 
                picture
            }).then(data => {
                // console.log(data)
                history('/contacts');
            }).catch(err => console.log(err))
        }
        
    }
    const {first_name, last_name, email, gender, dob, picture, error} = addContact;
    // console.log(addContact);
    return (
        <>        
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-3'>
                        <h2 className='text-center mb-3'>Add Contact</h2>
                        {
                            error && <div className='alert alert-danger'>{error}</div>
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
                            <div className="form-group">
                                <DatePicker onChange={handleDateChange} selected={dob} className="form-control" defaultValue={dob}></DatePicker>
                            </div>
                            <div className="form-group">
                                <label htmlFor="picture">Picture URL</label>
                                <input onChange={handleChange} value={picture} required type="url" name='picture' className="form-control" placeholder="Your Photo URL" />
                            </div>
                            <select onChange={handleChange} value={gender} required name='gender' className="form-select form-group" aria-label="Default select example">
                                {/* <option selected>Open this select menu</option> */}
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

export default AddContacts;