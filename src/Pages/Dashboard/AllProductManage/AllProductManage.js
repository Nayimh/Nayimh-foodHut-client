import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EditProducts from './EditProducts';

const AllProductManage = () => {

    const [dataDelete, setDataDelete] = useState([]);

    const [openOrder, setOpenOrder] = useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    useEffect(() => {
        fetch('https://young-savannah-06380.herokuapp.com/products')
        .then ( res => res.json())
        .then ( data => setDataDelete(data));
    },[])
   
  
      const handleDelete = id => {
        const url = `https://young-savannah-06380.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            
            if(data.deletedCount) {
              alert('Data Delete Successfully');
                const remaining = dataDelete.filter(pl => pl._id !==id)
                setDataDelete(remaining);
            }
        })
    }

    return (
        <div className='mt-5 pt-2'>
        <h1 className='text-center mb-3 fw-bold fst-italic'>Manage All Products</h1>
        <Table striped bordered hover variant="light">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
            
              <th scope="col">Action</th>
            </tr>
          </thead>
            {
              dataDelete.map(pl => 
                
                <tbody key ={pl._id}>
                <tr>
                    <td>{pl.name}</td>
                    <td>{pl.price}</td>
                    <td><img src={pl.img} style={{width:"100px", height:"100px", objectFit:"cover"}} alt="" /></td>
                    <td>{pl.desc}</td>
                    
                    <td className="text-center">
                    <button className="btn btn-danger p-1 m-1" onClick={ () => handleDelete(pl._id)}>DEL</button>
                    <button className="btn btn-primary p-1 m-1" onClick={handleOrderOpen}>EDIT</button>
                    </td>
                </tr>
            </tbody>
              )
            }
        </Table>
        <EditProducts
          key ={dataDelete._id}
          handleOrderClose = {handleOrderClose}
          openOrder = {openOrder}
          dataDelete={dataDelete}
        ></EditProducts>
        </div>
    );
};

export default AllProductManage;