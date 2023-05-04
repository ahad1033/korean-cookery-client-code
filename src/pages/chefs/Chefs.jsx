import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCards from '../home/chefCards/ChefCards';

const Chefs = () => {

    const chefCategories = useLoaderData();

    return (
        <div className=' mt-2'>
            <h1 className='fw-bold text-center text-info'>Here is our chef</h1>
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