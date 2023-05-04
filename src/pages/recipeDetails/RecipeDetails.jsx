import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {

    console.log(recipe.recipe[0].recipe_img
    );

    return (
        <div className='row w-75 justify-content-center align-items-center gap-5'>
            <Card className='col m-2 container justify-content-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.recipe[0]?.recipe_img} />
                <Card.Body>
                    <Card.Title>{recipe.recipe[0]?.recipe_name}</Card.Title>
                    <Card.Text><span className='fw-bold'>Cooking method:</span> {recipe.recipe[0]?.cooking_method}
                    </Card.Text>
                    <Card.Text> <span className='fw-bold'>Ingredients: </span>{recipe.recipe[0]?.ingredients}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeDetails;