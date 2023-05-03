import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCards from '../home/chefCards/ChefCards';

const Chefs = () => {

    const chefCategories = useLoaderData();

    return (
        <div>
            <h2>{chefCategories.length}</h2>
            {
                chefCategories.map(category => <ChefCards
                    key={category._id}
                    category={category}
                ></ChefCards>)
            }
        </div>
    );
};

export default Chefs;