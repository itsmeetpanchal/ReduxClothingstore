import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Checkout() {

    const [addeddata, setaddeddata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addtocart')
            .then((res) => { return res.json() })
            .then((data) => { setaddeddata(data) })
    }, [])
    const subtotal = addeddata.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <>
        <Navbar/>
            <div className='bg-light'>
                <div className='w-100 text-center m-auto'>
                    <img src="./images/logo-regular.png" alt="" className='img-fluid' />
                </div>
                <div className='text-center'>
                    <p className='fs-1'>You are almost there</p>
                    <p className='fs-5'>Adipiscing bibendum id a condimentum risus nec sed malesuada ut etiam egestas.</p>
                    <p><i className="fa-solid fa-shield-halved"></i> SSL secured checkout &nbsp; <i className="fa-solid fa-money-bill"></i> 24/7 support available &nbsp; <i className="fa-regular fa-credit-card"></i> Payment option </p>
                </div>
                <div className='w2  p-3 m-auto bg-white rounded text-center'>
                    <p className='py-3 fs-5'><i className='fa-regular fa-circle'></i> Cart &nbsp; <i className='fa-solid fa-circle'></i> Information  &nbsp;<i className='fa-regular fa-circle'></i> Finish</p>
                    <hr />
                    <div className='row m-auto'>
                        <div className='col-lg-7 p-3 text-start'>
                            <label for="" className='fs-5 mb-3 fw-bold'>Customer Information</label>
                            <input type="email" placeholder='Email *' className='w-100 rounded border-1 p-2' />
                            <br />
                            <br />
                            <label for="" className='fs-5 mb-3 fw-bold'>Billing Details</label>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <input type="text" placeholder='First Name*' className='w-100 border-1 p-2 rounded' />

                                </div>
                                <div className='col-lg-6'>
                                    <input type="text" placeholder='Last Name*' className='w-100 border-1 p-2 rounded' />

                                </div>
                            </div>
                            <input type="text" placeholder='Company Name *' className='w-100 mt-3 rounded border-1 p-2' />
                            <select className='w-100 mt-3 p-2 rounded'>
                                <option>India</option>
                                <option>Usa</option>
                                <option>Dubai</option>
                                <option>South africa</option>
                                <option>Australia</option>
                            </select>
                            <div className='row mt-3'>
                                <div className='col-lg-6'>
                                    <input type="text" placeholder='House number and Street Name*' className='w-100 border-1 p-2 rounded' />

                                </div>
                                <div className='col-lg-6'>
                                    <input type="text" placeholder='Appartment,suite,unit,etc.(optional)' className='w-100 border-1 p-2 rounded' />

                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-4'>
                                    <input type="text" placeholder='Town/city *' className='w-100 border-1 p-2 rounded' />

                                </div>
                                <div className='col-lg-4'>
                                    <select className='w-100 p-2 rounded'>
                                        <option selected>State</option>
                                        <option>India</option>
                                        <option>Usa</option>
                                        <option>Dubai</option>
                                        <option>South africa</option>
                                        <option>Australia</option>
                                    </select>

                                </div>
                                <div className='col-lg-4'>
                                    <input type="text" placeholder='Post code/Zip*' className='w-100 border-1 p-2 rounded' />

                                </div>
                            </div>
                            <input type="text" placeholder='Phone *' className='w-100 mt-3 rounded border-1 p-2' />
                            <label for="" className='fs-5 mt-3 fw-bold'>Additional Details</label>
                            <textarea rows="5" cols="20" className='w-100 mt-2 rounded' placeholder='Notes about your order,e.g special notes for delivery...'></textarea>
                            <label for="" className='fs-5 my-3 fw-bold'>Payment </label>
                            <div className="accordion accordion-flush border" id="accordionFlushExample">
                                <div className="accordion-item bg-light">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <input type="radio" />  Direct bank transfer
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body bg-white">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-light">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <input type="radio" /> Cash on delivery
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body bg-white">Pay with cash upon delivery.</div>
                                    </div>
                                </div>
                            </div>
                            <button className='py-2 bg-success text-white border-1 rounded mt-3 text-center w-100'><i className="fa-solid fa-lock"></i> Place order ${subtotal}</button>
                        </div>
                        <div className='col-lg-5 p-3 text-start'>
                            <label for="" className='fs-5 mt-3 fw-bold'>Your order</label>
                            <table className="table border rounded">
                                <thead className='text-center'>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>

                                    {addeddata && addeddata.map((user, index) => (
                                        <tr key={index}>
                                            <td >
                                                <img src={user.url} alt="" className='img-fluid' style={{ height: '50px' }} />
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.quantity}</td>
                                            <td>{user.price}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className='fs-3 fw-bold'>
                                            Total
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td className='fs-3 fw-bold'>${subtotal}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='row '>
                                <div className='col-lg-8'>
                                    <input type="text" className='w-100 rounded-1 border-1 py-2' placeholder='coupon code' />
                                </div>
                                <div className='col-lg-4'>
                                    <button className='bg-success w-100 py-2 text-white'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Checkout
