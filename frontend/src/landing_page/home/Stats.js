import React from 'react';

function Stats() {
    return ( 
        <div className='container p-4'>
            <div className='row p-4'>
                <div className='col p-4'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 mt-5'>Customer first always</h2>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 mt-5'>No span or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4 mt-5'>The Zerodha universe</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 mt-5'>Do better with money</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col p-4'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a style={{textDecoration:"none"}} href='' className=' fs-5'>
                            <span className='mx-3'>Explore our products</span>
                            <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                        <a style={{textDecoration:"none"}} href='' className='fs-5'>
                            <span className='mx-3'>Try kite demo</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;