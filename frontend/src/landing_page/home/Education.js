import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt='Educatin'/>
                </div>
                <div className='col '>
                    <h1 className='mb-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}} className='fs-5 mt-5'>
                         Versity
                        <span className='mx-3'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                    </a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}} className='fs-5'>
                        Trading Q&A
                        <span className='mx-3'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;