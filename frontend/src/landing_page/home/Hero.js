import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src='media/images/Homehero.png' alt='Homehero' className='p-5 mb-4'/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 mt-4 fw-bolder fs-5 mb-5' style={{width:"25%", margin:"0 auto"}}>Signup for Free</button>
            </div>
        </div>
     );
}

export default Hero;