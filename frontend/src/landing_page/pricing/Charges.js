import React from 'react';
function Charges() {
    return ( 
        <div className='container text-muted p-5'>
            <div className='row '>
                <h3 className='mb-4'>Charges for account opening</h3>
                <table className='table' style={{border:"1px solid lightgray"}}>
                    <thead>
                        <tr>
                            <th className='p-3'>Types of account</th>
                            <th className='p-3'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-3'>Online account</td>
                            <td className="text-success p-3">FREE</td>
                        </tr>
                        <tr className='table-active'>
                            <td className='p-3' >Offline account</td>
                            <td className="text-success p-3">FREE</td>
                        </tr>
                        <tr>
                            <td  className='p-3'>'NRI account(offline only)</td>
                            <td className='p-3'>₹ 500</td>
                        </tr>
                        <tr className='table-active'>
                            <td className='p-3'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className='p-3'>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row mt-5'>
                <h3 className='mb-4 mt-4'>Charges for optional value added services</h3>
                <table className='table' style={{border:"1px solid lightgray"}}>
                    <thead>
                        <tr>
                            <th className='p-3'>Services</th>
                            <th className='p-3'>Billing Frequency</th>
                            <th className='p-3'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-3'>Tickertape</td>
                            <td className='p-3' >Monthly/Annual</td>
                            <td className='p-3'>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr className='table-active'>
                            <td className='p-3'>Smallcase</td>
                            <td className='p-3'>Per transaction</td>
                            <td className='p-3'>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className='p-3'>Kite Connect</td>
                            <td className='p-3'>Monthly</td>
                            <td className='p-3'>Connect: 2000 | Historical: 2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Charges;