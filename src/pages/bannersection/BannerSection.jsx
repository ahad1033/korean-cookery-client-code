import React from 'react';

const BannerSection = () => {
    return (
        <div className='container d-flex'>
            <img className='w-50 m-2' src="https://images.unsplash.com/photo-1548592806-482f9b023d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80" alt="" />
            <div className='m-2 p-2 justify-content-center align-items-center'>
                <h1 className='fw-bold'>The real taste of Kores</h1>
                <p className='fw-semibold'>This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.</p>
            </div>
            
        </div>
    );
};

export default BannerSection;