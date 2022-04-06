import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {

    const { user } = useAuth();


    const [itemOrder, setOrderItem] = useState([]);
    useEffect(() => {
      const url = `https://young-savannah-06380.herokuapp.com/orders/${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrderItem(data));
    }, [user?.email]);
  
   
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
            <h1 className='text-center mb-3 fw-bold fst-italic FoodHeading'>My Orders</h1>
            <Table striped bordered hover variant="light">
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
                <tr style={{letterSpacing: '1.5px', fontWeight: '600', color: 'coral'}}>
                    <td><img className='shadow-lg' style={{width: '100px', objectFit: 'cover', borderRadius: '4px'}} src={pl?.img} alt="" /></td>
                    <td>{pl.email}</td>
                    <td>{pl.name}</td>
                    <td>{pl.price}</td>
                    <td>{pl.address}</td>
                    <td>{pl.phone}</td>
                    <td>{pl.status}</td>
                    <td className="text-center">
                    
                        <button className="btn btn-danger ms-2" onClick={ () => handleDelete(pl._id)}>cancel</button>
                    </td>
                </tr>
            </tbody>
              )
            }
        </Table>
        </div>
    );
};

export default MyOrder;