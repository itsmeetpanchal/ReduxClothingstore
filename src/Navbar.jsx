import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { deletedata } from './Usereducer'

function Navbar() {
    const navigate = useNavigate()
    const [addeddata, setaddeddata] = useState([])

    const dispatch = useDispatch()
    // useEffect(() => {
    //     refreshdata()
    // }, [])
    // const refreshdata = () => {
    //     fetch(`http://localhost:5000/addtocart`)
    //         .then((res) => { return res.json() })
    //         .then((data) => {
    //             setaddeddata(data)
    //         })
    // }
    // // refreshdata()
    useEffect(() => {
        fetch('http://localhost:5000/addtocart')
            .then((res) => { return res.json() })
            .then((data) => { setaddeddata(data) })
    }, [])
    const deleteproduct = (id) => {
        dispatch(deletedata({ id: id }))
    }
    const subtotal = addeddata.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <>

            <div className="offcanvas offcanvas-top h-100 bg-transparent fs-5" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close fs-3 p-5 text-primary text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body w-75 m-auto text-center">
                    <input type="text" className="form-control" style={{ maxWidth: '500px', margin: '0 auto' }} placeholder="Search..." />
                </div>
            </div>


            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Your Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mt-3 m-auto">
                        {addeddata && addeddata.map((user, index) => (
                            // console.log(user.id)



                            <div className="card mb-3" key={index}>

                                <div className="row g-0">
                                    <div className="col-md-4 p-3">
                                        <img src={user.url} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{user.name}<span className='float-end'><i className='fa-solid fa-close' onClick={() => { deleteproduct(user.id) }}></i></span></h5>
                                            <p className="card-text">{user.quantity} x ${user.price}<span className='float-end'>{user.color}</span><span className='float-end'>{user.size},</span></p>
                                            <span className="fs-5">${user.quantity * user.price}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        ))}
                    </div>
                </div>
                <div className='offcanvas-footer w-75 m-auto mb-5'>
                    <span className='fs-3'>Total:${subtotal}</span>
                    <br />
                    <br />
                    <button className='btn btn4 rounded-pill px-4 me-2 fs-5' type='button' onClick={() => navigate('/cart')}>View Cart</button>
                    <button className='btn btn4 rounded-pill px-4 fs-5' type='button' onClick={() => navigate('/checkout')}>Checkout</button>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <img className="navbar-brand img-fluid" src='./images/icons/logo-01.png'></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/shop"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >Shop</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/features"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >Features</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/blog"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >Blog</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >About</NavLink>
                            </li>
                            <li className="nav-item me-5">
                                <NavLink
                                    to="/contact"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "blue"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >Contact</NavLink>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <button type="button" className="btn fs-5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <i className="fa-solid fa-magnifying-glass"></i>

                            </button>
                            <button type="button" className="btn fs-5 position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                    {addeddata.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            <button type="button" className="btn fs-5 position-relative">
                                <i className="fa-regular fa-heart"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                    0
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
