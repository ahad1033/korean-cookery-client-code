import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const ChefCards = ({ category }) => {

    console.log(category);

    const { picture, name, experience, total_recipe, likes, recipe, cooking_method } = category;

    return (
        <Container>
            <Row>
                <Col lg={4} sm={12}>
                    <Card className="m-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Years of experience: {experience}</ListGroup.Item>
                            <ListGroup.Item>Number of recipe: {total_recipe}</ListGroup.Item>
                            <ListGroup.Item>Likes: {likes}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChefCards;