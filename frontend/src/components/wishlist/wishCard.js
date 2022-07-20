import {  Container, Card, Col, Row, Button } from 'react-bootstrap';

const WishCard = ({wishJson}) => {
    if({wishJson} !== [])
        console.log(wishJson)
    return (
        <>
            {wishJson.map((item, idx) => (
                <Container className="p-3 justify-content-center">
                    <Card style={{ width: '60rem' }} className="text-center">
                        <Card.Body>
                            <Row>
                                <Col xs={1} md={2}>
                                <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                </Col>
                                <Col xs={3} md={6}>
                                    <div></div>
                                    <a href='#'><div>{item.name}</div></a>
                                    <div>${item.price}</div>
                                </Col>
                                <Col xs={3} md={4}>
                                    <Button> Buy now </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            ))}
        </>
    );
}

export default WishCard;