import React from 'react';

function LeftSection({ imageUrl, productName, productDescription }) {
    return (
        <div className='container'>
            <div className='row mt-3 p-5'>
                <div className='col-lg-8 mt-5 col-sm-12'>
                    <img src={imageUrl} alt={productName} className='ps-5' style={{ width: "80%" }} />
                </div>
                <div className='col-lg-4 col-sm-12 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-4 fs-5'>{productDescription}</p>
                    <div className='row'>
                        <div className='col'>
                            <a href='#' className='text-decoration-none fs-5'> <p>Try demo →</p></a>
                        </div>
                        <div className='col'>
                            <a href='#' className='text-decoration-none fs-5'> <p>Learn more →</p></a>
                        </div>
                    </div>
                    <div className='row'>

                        <div className='col'>
                            <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" target='_blank'><img src='media/images/googlePlayBadge.svg' className='store' alt='PlayStore' style={{ width: "100%" }} /></a>
                        </div>
                        <div className='col'>
                            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1" target='_blank'><img src='media/images/appstoreBadge.svg' alt='AppStore' style={{ width: "90%" }} className='store' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;