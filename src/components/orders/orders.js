
import { Container, Tabs, Tab } from 'react-bootstrap';

import Search from './search';

const OrderHistory = () => {
    const orderJson = [{
        'Status': 'Delivered',
        'Date': 'June 04, 2022',
        'Price': 'CDN $17.96',
        'Number': '702-8213628-3927454',
        'Delivery': 'Delivered June 14, 2022',
        'Title': 'SHISEIDO 3 Piece Prepare Facial Razor, Large (Japan Import)',
        'Image': './static/prod1.jpeg'
    },
    {
        'Status': 'Delivered',
        'Date': 'May 01, 2022',
        'Price': 'CDN$ 37.94',
        'Number': '702-8213628-3927123',
        'Delivery': 'Delivered May 11, 2022',
        'Title': 'MOSISO Laptop Shoulder Bag',
        'Image': './static/laptop_bag.jpeg'
    }]
    const cancelledOrders = [{
        'Date': 'April 12, 2022',
        'Price': 'CDN$ 31.40',
        'Number': '702-9414019-2742637',
        'Delivery': 'Cancelled',
        'Title': 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness',
        'Image': './static/book1.jpeg'
    }]
    const pendingOrders = [{
        'Date': 'April 22, 2022',
        'Price': 'CDN$ 41.40',
        'Number': '902-9414019-2742637',
        'Delivery': 'Delivery Pending',
        'Title': 'Verb Ghost Shampoo, Vegan Color-Safe Shampoo Infused with Moringa Oil, Cleanses Fine and Weighed Down Hair, 12 fl oz',
        'Image': './static/shampoo.jpeg'
    }]
    return (
        <>
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
        </>
    );
}

export default OrderHistory;