import React from 'react';

function Hero() {
    return (
        <div className='container-fluid p-3' style={{ backgroundColor: "#387ed1"}}>
            <div className='container'>
                <div className=' text-white p-5 d-flex justify-content-between'>
                    <div>
                        <h4>Support Portal</h4>
                    </div>
                    <div>
                        <h5>Track Tickets</h5>
                    </div>
                </div>
                <div className='row ps-5'>
                    <div className='col-lg-7 col-sm-12 text-white'>
                        <h4>Search for an answer or browser help topics to create a ticket</h4>
                        <div  className='input mt-5'>
                            <input placeholder='Eg:how do I active F&O, why is my order getting rejected...'  ></input><i class="fa fa-search mb-5" aria-hidden="true"></i>
                            <span className=' fs-5'>Track account opening</span>
                            <span className='ps-4 fs-5'> Track segment activation</span>
                            <span className=' fs-5 ps-5'> Intraday margins Kite user manual</span>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-12 text-white p-5 '>
                        <h4>Featured</h4>
                        <div>
                            <ol>
                                <li className='fs-5 mb-3 mt-3'>BSE StAR mutual fund platform downtime</li>
                                <li className='fs-5'>Rights Entitlements listing in October 2024</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;