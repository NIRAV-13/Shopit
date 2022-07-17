
import { Container, Tabs, Tab } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import axios from "axios";
import {orderJson,cancelledOrders,pendingOrders} from '../orders/ordersArray'
import Search from './search';

const api = axios.create({
    baseURL: "http://localhost:8080",
  });
const Orders = () => {
    const [order, setOrder] = useState([]);
    const [pendingOrder, setPending] = useState([]);
    const [cancelledOrder, setOrderPending] = useState([]);
    const data = async () => {
        const response = await api.get("/order/get");
        const orders = response.data
        setOrder(response.data);
      };
      data();

    return (
        <>
            <NavBar></NavBar>
            <Container>
                <h1>Your Orders</h1>
                <Tabs defaultActiveKey="history" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="history" title="Order History">
                        <Search orderJson={order}></Search>

                    </Tab>
                    <Tab eventKey="pending" title="Yet to be delivered">
                        <Search orderJson={pendingOrders}></Search>

                    </Tab>
                    <Tab eventKey="cancelled" title="Cancelled orders">
                        <Search orderJson={cancelledOrders}></Search>

                    </Tab>
                </Tabs>

            </Container>
            <Footer></Footer>
        </>
    );
}

export default Orders;