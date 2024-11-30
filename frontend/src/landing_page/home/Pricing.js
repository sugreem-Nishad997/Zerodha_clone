import React from 'react';

function Pricing() {
    return ( 
       <div className='conatiner p-5'>
        <div className='row px-5'>
            <div className='col-4 px-5'>
                <h1 className='mb-5'>Unbeatable Pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='' style={{textDecoration:"none"}} className='fs-5'>
                    See pricing
                    <span className='mx-3'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                </a>
            </div>
            <div className='col-8 mt-5'>
                <div className='row mt-4'>
                    <div className='col-4  '>
                       <div className='row'>
                            <div className='col'>
                                <img src='media/images/pricing-eq.svg' alt='Pricing-eq'/>
                            </div>
                            <div className='col mt-4'>
                                <span className='text-muted'>Free account opening</span>
                            </div>
                       </div>
                    </div>
                    <div className='col-4'>
                       <div className='row'>
                            <div className='col'>
                                <img src='media/images/pricing-eq.svg' alt='Pricing-eq'/>
                            </div>
                            <div className='col mt-3'>
                                <span style={{fontSize:"0.8rem"}} className='text-muted'>Free equity delivery and direct mutual funds</span>
                            </div>
                       </div>
                    </div>
                    <div className='col-4 '>
                        <div className='row'>
                            <div className='col'>
                               <img src='media/images/other-trades.svg' alt='Pricing-eq' /> 
                            </div>
                            <div className='col mt-3'>
                               <span className='text-muted'>Intraday and F&O</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;