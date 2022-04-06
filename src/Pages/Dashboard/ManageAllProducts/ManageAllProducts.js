import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageAllProducts = () => {

    const { user } = useAuth();


    const [status, setStatus] = useState([]);
    const [manageOrder, setManageOrder] = useState([]);
  
    const handleUpdate = id => {
        const productStatus = 'accepted';
        setStatus(productStatus);
  
        const isAccepted = { status };
  
      
        const url = `https://young-savannah-06380.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isAccepted)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Order Status updated');
                    /* const remainingOrders = manageOrder.filter(order => order.status !== 'Pending');
                    setManageOrder(remainingOrders); */
                }
            })
    }
  
    useEffect(() => {
        
        const url = 'https://young-savannah-06380.herokuapp.com/orders';
        fetch(url)
            .then(res => res.json())
            .then(data => setManageOrder(data.orders))
    }, [user]);
  
  
  
  
      const [itemOrder, setOrderItem] = useState([]);
    useEffect(() => {
      const url = `https://young-savannah-06380.herokuapp.com/orders`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrderItem(data));
    }, []);
  
   
    const handleDelete = (id) => {
      const url = `https://young-savannah-06380.herokuapp.com/orders/${id}`;
      fetch(url, {
          method: 'DELETE'
      })
      .then( res => res.json())
      .then( data => {
          console.log(data);
          if(data.deletedCount) {
            alert('Data Delete Successfully'); 
              const remaining = itemOrder.filter(pl => pl._id !==id)
              setOrderItem(remaining);
          }
      })
  }

    return (
        <div className='mt-5 pt-2 container bg shadow-lg'>
        <h1 className='text-center mb-3 fw-bold fst-italic FoodHeading'>Manage All Orders</h1>
      <Table cla striped bordered hover variant="light">
          <thead>
          <tr className="text-center paragraph">
              <th>Image</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
              itemOrder.map(pl => 
                
                <tbody key ={pl._id}>
                      <tr style={{ letterSpacing: '1.5px', fontWeight: '600', color: 'coral' }}>
                <td><img style={{width: '100px', objectFit: 'cover', borderRadius: '4px'}} src={pl?.img} alt="" /></td>
                    <td>{pl.email}</td>
                    <td>{pl.name}</td>
                    <td>{pl.price}</td>
                    <td>{pl.address}</td>
                    <td>{pl.phone}</td>
                    <td>{pl.status}</td>
                    <td className="text-center">
                    {pl.status === "Pending" && <button onClick={() => handleUpdate(pl._id)} className="btn btn-success me-2" >Accept</button>}
                        
                          </td>
                          <td><button className="btn btn-danger ms-2" onClick={ () => handleDelete(pl._id)}>Delete</button></td>
                </tr>
            </tbody>
              )
            }
      </Table>
      </div>
    );
};

export default ManageAllProducts;