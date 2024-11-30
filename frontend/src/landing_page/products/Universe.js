import React from 'react';

function Universe() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row text-center text-muted'>
                    <h1 className='mb-4'>The Zerodha Universe</h1>
                    <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className='row mt-3 ps-5'>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://www.zerodhafundhouse.com/' target='_blank'>
                            <img src='media/images/zerodhaFundhouse.png' alt='ZerodhaFundhouse' className='store' style={{width:"60%"}} />
                        </a>
                        <p className='mt-4'>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://sensibull.com/' target='_blank'>
                            <img src='media/images/sensibullLogo.svg' alt='SensiBull' className='w-75 store' />
                        </a>
                        <p className='mt-4'>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://www.tijorifinance.com/features/' target='_blank'>
                            <img src='media/images/tijori.svg' alt='Tijori' className='w-50 store' />
                        </a>
                        <p className='mt-4'>
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>
                <div className='row ps-5'>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://www.streak.tech/home' target='_blank'>
                            <img src='media/images/streakLogo.png' alt='Streak' className='store' style={{width:"60%"}} />
                        </a>
                        <p className='mt-4'>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://smallcase.zerodha.com/' target='_blank'>
                            <img src='media/images/smallcaseLogo.png' alt='SmallCase' className='w-75 store' />
                        </a>
                        <p className='mt-4'>
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className='col-lg-4 col-sm-12 text-center p-5'>
                        <a href='https://joinditto.in/' target='_blank'>
                            <img src='media/images/dittoLogo.png' alt='Ditto' className='w-50' />
                        </a>
                        <p className='mt-4'>
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free
                        </p>
                    </div>
                </div>
                <div className='row center'>
                <button className='btn btn-primary p-2 mt-4 fw-bolder fs-5 mb-5 store' style={{width:"25%", margin:"0 auto",}}>Signup for Free</button>
                </div>
            </div>
        </>
    );
}

export default Universe;