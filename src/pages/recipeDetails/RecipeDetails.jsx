import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {

    console.log(recipe.recipe);

    // const { recipe_id, recipe_name, ingredients, cooking_method, ratings, recipe_img } = recipe;

    return (
        <div>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.recipe_img} />
                <Card.Body>
                    <Card.Title>{recipe.recipe_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeDetails;