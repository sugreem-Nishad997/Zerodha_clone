import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='text-muted mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 mt-4 fs-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for Free</button>
            </div>
        </div>
    );
}

export default OpenAccount;