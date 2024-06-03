import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { updatedata } from './Usereducer'
import { useDispatch } from 'react-redux'

function Cart() {
    const [addeddata, setaddeddata] = useState([])
    const [quantity,setquantity]=useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('http://localhost:5000/addtocart')
            .then((res) => { return res.json() })
            .then((data) => { setaddeddata(data) })
    }, [])
    const subtotal = addeddata.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <>
            <Navbar />
            <div className='row w-75 gap-4 m-auto text-center'>
                <div className='col-lg-7 border py-4 my-5 table-responsive'>
                    <table class="table">
                        <thead className=''>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Size</th>
                                <th scope='col'>Color</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addeddata && addeddata.map((user, index) => (
                                <tr>
                                    <td scope="row">
                                        <img src={user.url} alt="" className='img-fluid' style={{ height: '100px' }} />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.size}</td>
                                    <td>{user.color}</td>
                                    <td>${user.price}</td>
                                    <td>
                                        <div className='row border w-100 text-center ms-2 align-items-center'>
                                            <div className='col-4 border-end btn' onClick={() => { setquantity(quantity > 1 ? quantity - 1 : 1) }}>-</div>
                                            <div className='col-4'>{user.quantity}</div>
                                            <div className='col-4 border-start btn' onClick={() => { setquantity(quantity + 1) }}>+</div>
                                        </div>
                                    </td>
                                    <td>${user.price * user.quantity}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <tbody className=' w-100 d-flex float-bottom'>
                        <input type="text" className='rounded-pill border-1 w-50 p-2' placeholder='COUPON CODE' />
                        <button type='button' className='btn btn4 rounded-pill me-4'>APPLY COUPON</button>
                        <button type='button' className='btn btn4 rounded-pill'>UPDATE CART</button>
                    </tbody>
                </div>
                <div className='col-lg-4 border p-4 my-5'>
                    <h3>CART TOTALS</h3>
                    <h5>SUBTOTAL:&nbsp;${subtotal}</h5>
                    <hr />
                    <p>Shipping: There are no shipping methods available. Please double check your address, or contact us if you need any help.</p>
                    <h5>CALCULATE SHIPPING</h5>
                    <select className='mb-2 p-2 w-75'>
                        <option disabled>Select a country</option>
                        <option >USA</option>
                        <option >INDIA</option>
                        <option>UK</option>
                    </select>
                    <br />
                    <input type="text" placeholder='state/country' className='mb-2 w-75 p-2' />
                    <br />
                    <input type="text" placeholder='Postcode/zip' className='mb-2 w-75 p-2' />
                    <br />
                    <button type='button' className='btn btn4 px-4 rounded-pill py-2'>UPDATE TOTALS</button>
                    <hr />
                    <p className='fs-3'>TOTAL:&nbsp;${subtotal}</p>
                    <br />
                    <button className='btn text-white py-2 rounded-pill bg-dark w-100 justify-content-center'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
