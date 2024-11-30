import React from 'react';

function RightSecion({imageUrl, productName, productDescription}) {
    return ( 
        <div className='container'>
        <div className='row  p-5'>
            <div className='col-lg-4 col-sm-12 mt-5 p-5'>
                <h1 className='mt-5'>{productName}</h1>
                <p className='mt-4 fs-5'>{productDescription}</p>
                <div className='row'>
                    <div className='col'>
                        <a href='#' className='text-decoration-none fs-5'> <p>Learn more →</p></a>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-sm-12'>
                <img src={imageUrl} alt={productName} className='ps-5 w-100'/>
            </div>
        </div>
    </div>
     );
}

export default RightSecion;