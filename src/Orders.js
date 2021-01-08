import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order.js';

const Orders = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('create', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([]);
        }
    }, [user]);

    console.log(user);
    console.log(orders);

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;
