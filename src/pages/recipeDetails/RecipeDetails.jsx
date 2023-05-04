import React, { useState } from 'react';
import { Button, Card, Toast } from 'react-bootstrap';

const RecipeDetails = ({ recipe }) => {

    console.log(recipe.recipe[0].recipe_img
    );

    const [showToast, setShowToast] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleClick = () => {
        setShowToast(true);
        setIsButtonDisabled(true);
        setTimeout(() => {
            setShowToast(false);
            setIsButtonDisabled(false);
        }, 10000);
    };

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
                    <Card.Text> <span className='fw-bold'>Ratings: </span>{recipe.recipe[0]?.ratings}
                    </Card.Text>
                    <div>
                        <Button variant="primary" onClick={handleClick} disabled={isButtonDisabled}>
                            Add to Favorite
                        </Button>

                        <Toast show={showToast} onClose={() => setShowToast(false)}>
                            <Toast.Body>Added to Favorite</Toast.Body>
                        </Toast>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeDetails;