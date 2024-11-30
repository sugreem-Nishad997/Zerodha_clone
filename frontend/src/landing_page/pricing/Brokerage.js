import React from 'react';
import { Link } from 'react-router-dom';

function Brokerage() {
    return ( 
        <div className='container text-muted p-5'>
            <div className='row mb-5'>
                <h3>Charges explained</h3>
            </div>
            <div className='row '>
                <div className='col-lg-6 col-sm-12'>
                    <h5 className='mb-4'>Securities/Commodities transaction tax</h5>
                    <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                    <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <h5 className='mb-4'>Transaction/Turnover Charges</h5>
                    <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                    <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                    <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>


                    <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>


                    <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                    <h5 className='mb-4'>Call & trade</h5>
                    <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                    <h5 className='mb-4'>Stamp charges</h5>
                    <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h5 className='mb-4'>NRI brokerage charges</h5>
                    <ul>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>

                    <h5 className='mb-4'>Account with debit balance</h5>
                    <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                    <h5 className='mb-4'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value)</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h5 className='mb-4'>GST</h5>
                    <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                    <h5 className='mb-4'>SEBI Charges</h5>
                    <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                    <h5 className='mb-4'>DP (Depository participant) charges</h5>
                    <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                    <h5 className='mb-4'>Pledging charges</h5>
                    <p>₹30 + GST per pledge request per ISIN.</p>

                    <h5 className='mb-4'>AMC (Account maintenance charges)</h5>
                    <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <Link to='/support' className='text-decoration-none'>Click here</Link></p>
                    <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <Link to='/support' className='text-decoration-none'>Click here</Link></p>

                    <h5 className='mb-4'>Corporate action order charges</h5>
                    <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <h5 className='mb-4'>Off-market transfer charges</h5>
                    <p>₹25 or 0.03% of the transfer value (whichever is higher).</p>

                    <h5 className='mb-4'>Physical CMR request</h5>
                    <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                    <h5 className='mb-4'>Payment gateway charges</h5>
                    <p>₹9 + GST (Not levied on transfers done via UPI)</p>

                    <h5 className='mb-4'>Delayed Payment Charges</h5>
                    <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.<Link to='/support' className='text-decoration-none'> Learn more.</Link></p>
                </div>
            </div>
            <div className='row mt-5'>
                <h5>Disclaimer</h5>
                <p className='mt-3'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
     );
}

export default Brokerage;