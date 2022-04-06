import React from 'react';
import AddProducts from '../AddProducts/AddProducts';
// import AllProducts from '../AllProducts/AllProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
        <div>
            <MakeAdmin />
            <AddProducts />
            <MyOrder />
            <ManageAllProducts/>
        </div>
    );
};

export default DashboardHome;