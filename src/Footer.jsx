import React from 'react'

function Footer() {
    return (
        <>
            <div className='row me-0 bg-dark text-white'>
                <div className='col-lg-3 p-5'>
                    <p className='fs-3 fw-bold'>CATEGORIES</p>
                    <p>Women</p>
                    <p>Men</p>
                    <p>Shoes</p>
                    <p>Watches</p>
                </div>
                <div className='col-lg-3 p-5'>
                    <p className='fs-3 fw-bold'>HELP</p>
                    <p>Track Order</p>
                    <p>Returns</p>
                    <p>Shipping</p>
                    <p>FAQs</p>
                </div>
                <div className='col-lg-3 p-5'>
                    <p className='fs-3 fw-bold'>GET IN TOUCH</p>
                    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <p><i className='fa-brands fa-facebook'></i>&nbsp;&nbsp;&nbsp;
                        <i className='fa-brands fa-instagram'></i>&nbsp;&nbsp;&nbsp;
                        <i className='fa-brands fa-pinterest'></i>&nbsp;&nbsp;&nbsp;</p>
                </div>
                <div className='col-lg-3 p-5'>
                    <p className='fs-3 fw-bold'>NEWSLETTER</p>
                    <p><input type="text" className='w-100 bg-transparent border-0 border-bottom border-white' placeholder='email@example.com' /></p>
                    <button className='border-0 px-3 py-2 fs-5 rounded-pill btn btn-primary'>Load More</button>

                </div>
            </div>
        </>
    )
}

export default Footer
