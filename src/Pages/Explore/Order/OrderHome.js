import React from 'react';
import Footer from '../../Home/Footer/Footer';
import HeadMunu from '../../Home/HeadMunu/HeadMunu';
import Order from './Order';

const OrderHome = () => {
    return (
        <div>
            <HeadMunu />
            <Order />
            <Footer/>
        </div>
    );
};

export default OrderHome;