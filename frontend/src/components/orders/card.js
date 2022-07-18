import {  Container, Card, Col, Row, Image } from 'react-bootstrap';

const OrderCard = ({orderJson}) => {
    // if({orderJson} !== [])
    //     console.log(orderJson)
    return (
        <>
            {orderJson.map((order, idx) => (
                <Container key = {order.id} className="p-3">
                    <Card>
                        <Card.Header>
                            <Row xs={1} md={2} className="g-4">
                                <Col xs={1} md={2}>
                                    <div>ORDER PLACED</div>
                                    <div>{order.Date}</div>
                                </Col>
                                <Col xs={3} md={7}>
                                    <div>TOTAL</div>
                                    <div>{order.Price}</div>
                                </Col>
                                <Col xs={1} md={3}>
                                    <div>ORDER # {order.Number}</div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <h2 className="text-bold">{order.Delivery}</h2>
                            <Row>
                                <Col xs={1} md={2}>
                                    <Image src={order.Image}/>
                                </Col>
                                <Col xs={3} md={7}>
                                    <a href='#'><div>{order.Title}</div></a>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-muted"><a href="#">Archive order</a></Card.Footer>
                    </Card>
                </Container>
            ))}
        </>
    );
}

export default OrderCard;