import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './AddProduct.css'
const AddProducts = () => {

    const [addProduct, setAddProduct] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        console.log(newProduct);
        newProduct[field] = value;
        setAddProduct(newProduct);
    }

    const handleProductSubmit = e => {
        const productAdd = {
            ...addProduct
        }
        fetch('https://young-savannah-06380.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Added Succesfully");
            }
        })
        e.target.reset();
        e.preventDefault();
    };

    return (
        <div>
             <Container className="bg px-4 py-5 mb-4 rounded mt-5 pt-5 d-flex">
           
            <Form className=" col-sm-12 col-md-12 mb-3 mx-auto " onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Item Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" name="img" onBlur={handleOnBlur} placeholder="Image" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Price" type='number'  name="price" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea className="form-control" name="description" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                </Form.Group>
                

                <div className="text-center mt-5">
                    <button  type="submit" className="w-50 button" >
                        Submit
                    </button>
                </div>
          </Form>
          
            </Container>
        </div>
    );
};

export default AddProducts;