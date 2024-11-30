import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <>
            <div className='container'>
                <div className='row text-center'>
                    <h1>People</h1>
                </div>
                <div className='row mt-5 p-5'>
                    <div className='col text-center'>
                        <img src='media/images/nithinKamath.jpg' style={{ borderRadius: "100%", width: "60%" }} />
                        <h3 className='mt-4 fs-5 mb-3'>Nithin Kamath</h3>
                        <h6 >Founder, CEO</h6>
                    </div>
                    <div className='col fs-5'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>

                        <p>Connect on <Link to="/" style={{ textDecoration: "none" }} target='_blank'>Homepage</Link>
                         / <a href='https://tradingqna.com/u/nithin/summary' style={{ textDecoration: "none" }} target='_blank'>TradingQnA</a> / <a href='https://x.com/' style={{ textDecoration: "none" }} target='_blank'>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;