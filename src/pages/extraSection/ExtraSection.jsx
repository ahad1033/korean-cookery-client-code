import React from 'react';
import ExtraSectionUpper from './ExtraSectionUpper';

const ExtraSection = () => {
    return (
        <>
            <ExtraSectionUpper />
            <div class="text-bg-secondary p-3 text-center p-5 m-5">
                <h1 className='text-black fw-bold'>About Korean Cookery</h1>
                <p className=''>This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here. Offering stylish and modern European cuisine served with exquisite attention to detail and immaculate presentation.</p>
                <button type="button" class="btn btn-light fw-semibold">Book A Table</button>
            </div>
        </>
    );
};

export default ExtraSection;