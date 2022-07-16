
import { Container, Tabs, Tab } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import {orderJson,cancelledOrders,pendingOrders} from '../orders/ordersArray'
import Search from './search';

const Orders = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <h1>Your Orders</h1>
                <Tabs defaultActiveKey="history" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="history" title="Order History">
                        <Search orderJson={orderJson}></Search>

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