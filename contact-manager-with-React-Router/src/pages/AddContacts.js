import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddContacts = () => {
    const [addContact, setAddContact] = useState({
        "id": 1,
        "first_name": "",
        "last_name": "",
        "email": "",
        "gender": "",
        "dob": new Date(),
        "picture": ""
    })
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-3'>
                        <h2 className='text-center mb-3'>Add Contact</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fName">First Name</label>
                                <input type="text" name='fName' className="form-control" placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lName">Last Name</label>
                                <input type="text" name='lName' className="form-control" placeholder="Enter last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name='email' className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <DatePicker></DatePicker>
                            </div>
                            <div className="form-group">
                                <label htmlFor="url">Picture URL</label>
                                <input type="url" name='url' className="form-control" placeholder="Enter email" />
                            </div>
                            <select name='gender' className="form-select form-group" aria-label="Default select example">
                                {/* <option selected>Open this select menu</option> */}
                                <option value="male" selected>Male</option>
                                <option value="female">Female</option>
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