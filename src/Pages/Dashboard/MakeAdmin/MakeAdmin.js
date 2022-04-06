
import React, { useState } from 'react';
import {  Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        const url = 'https://young-savannah-06380.herokuapp.com/users/admin';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    alert('New admin successfully created.');
                }
            })
        e.preventDefault();
    }
    

    return (
       
<div className=' pt-5'>
<div className="col-12 col-lg-5 mx-auto mt-5  border bg-light border rounded-3 shadow-lg">
    <Form  onSubmit={handleAdminSubmit} className="mx-3 px-3 bg">
        <Form.Text className="paragraph fw-bold fst-italic mb-1 fs-3">Make Admin</Form.Text>

        <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='paragraph'>Type user email address :</Form.Label>
            <Form.Control onBlur={handleOnBlur} type="email" placeholder="Register user before making admin" />
        </Form.Group>

        <button className="mb-3 button"  type="submit">Confirm Admin</button>
    </Form>
    </div>
    </div>
    );
};

export default MakeAdmin;