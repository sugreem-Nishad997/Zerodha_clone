import React from 'react';

function Hero() {
    return ( 
        <>
            <div className='container mt-5'>
                <div className='row p-5 text-center text-muted border-bottom'>
                    <h1 style={{fontSize:"3.4rem"}}>Zerodha Products</h1>
                    <h4 className='mt-3 mb-3'>Sleek, modern, and intuitive trading platforms</h4>
                    <h5>Check out our <a href='#' target='_blank' className='text-decoration-none'>investment offerings →</a></h5>
                </div>
            </div>
        </>
     );
}

export default Hero;