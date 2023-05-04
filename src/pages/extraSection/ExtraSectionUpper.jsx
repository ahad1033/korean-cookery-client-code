import React from 'react';

const ExtraSectionUpper = () => {
    return (
        <div className='container d-flex'>
            <div>
                <h1 className='fw-bold text-info'>Our priority is to offer a warm welcome</h1>
                <br />
                <p className='text-semibold'>This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.</p>
                <hr />
                <br />
                <button type="button" class="btn btn-outline-primary">Our Gallary</button>

            </div>
            <img className='w-50' src="https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
    );
};

export default ExtraSectionUpper;