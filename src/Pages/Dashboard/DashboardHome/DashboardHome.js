import React from 'react';
import AddProducts from '../AddProducts/AddProducts';
// import AllProducts from '../AllProducts/AllProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const DashboardHome = () => {
    return (
        <div>
            <MakeAdmin />
            <AddProducts />
           
        </div>
    );
};

export default DashboardHome;