import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefCards = ({ category }) => {

    const { _id, picture, name, experience, total_recipe, likes, recipe, cooking_method } = category;

    return (
        <Container>
            <Row lg={2}>
                <Col lg={4} sm={12}>
                    <Card className="m-5 p-2 border border-primary" style={{ width: '18rem' }}>
                        <LazyLoadImage src={picture}
                            alt="Image Alt"
                        />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Years of experience: {experience}</ListGroup.Item>
                            <ListGroup.Item>Number of recipe: {total_recipe}</ListGroup.Item>
                            <ListGroup.Item>Likes: {likes}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Link className='items-center' to={`/chefRecipe/${_id}`}><Button variant="outline-primary">View Recipe</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChefCards;