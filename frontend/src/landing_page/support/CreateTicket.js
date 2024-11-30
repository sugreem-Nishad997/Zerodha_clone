import React from 'react';

function CreateTicket() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row text-muted mb-5'>
                <h3>To create a ticket, select a relevant topic</h3>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4'><i class="fa fa-plus-circle me-2 fs-5" aria-hidden="true"></i>
                    Account Opening</h5>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Getting started</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Online</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Offline</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Charges</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Company, Partnership and HUF</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Non Resident Indian (NRI)</a></div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4'><i class="fa fa-user-o me-2 fs-5" aria-hidden="true"></i>
                    Your Zerodha Account</h5>
                    <div className='mb-3 ps-4'><a href='' className=' text-decoration-none'>Login credentials</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Your Profile</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Account modification and segment addition</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>CMR & DP ID</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Nomination</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Transfer and conversion of shares</a></div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4'><i class="fa fa-bar-chart me-3 fs-5" aria-hidden="true"></i>
                    Trading and Markets</h5>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Trading FAQs</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Kite</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Margins</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Product and order types</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Corporate actions</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Kite features</a><br/></div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4'><i class="fa fa-credit-card me-2 fs-5" aria-hidden="true"></i>
                    Funds</h5>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Fund withdrawal</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Adding funds</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Adding bank accounts</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Charges</a></div>
                     <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>eMandates</a></div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4'><i class="fa fa-dot-circle-o me-2 fs-5" aria-hidden="true"></i>
                    Console</h5>
                    <div className='mb-3 ps-4'><a href='' className=' text-decoration-none'>IPo</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Portfolio</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Funds statement</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Profile</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Reports</a><br/></div>
                    <div className='mb-3 ps-4'><a href='' className='text-decoration-none'>Refferal program</a></div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <h5 className='mb-4 ms-2'><i class="fa fa-circle-o-notch me-3 fs-5" aria-hidden="true"></i>
                    Coin</h5>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Understanding mutual funds and Coin</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Coin app</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Coin web</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>Transaction and reports</a><br/></div>
                    <div className='mb-3 ps-5'><a href='' className='text-decoration-none'>National Pension Scheme(NPS)</a><br/></div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;