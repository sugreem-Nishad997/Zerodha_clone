import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row text-center'>
                <h1 style={{fontSize:"3.5rem"}}>Charges</h1>
                <p className='text-muted fs-4 mt-3 mb-5'>List of all charges and taxes</p>
            </div>
            <div className='row mt-5 text-center text-muted'>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img src='media/images/pricing-eq.svg' alt='PricingEQ' className='w-75'/>
                    <h2 className='mt-3'>Free equity delivery</h2>
                    <p className='mt-4 fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img src='media/images/other-trades.svg' alt='OtherTraders' className='w-75'/>
                    <h2 className='mt-3'>Intraday and F&O trades</h2>
                    <p className='mt-4 fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img src='media/images/pricing-eq.svg' alt='PricingEQ' className='w-75'/>
                    <h2 className='mt-3'>Free direct MF</h2>
                    <p className='mt-4 fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;