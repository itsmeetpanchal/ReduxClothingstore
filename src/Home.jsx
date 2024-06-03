import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Home() {
    const [users] = useSelector((state) => state.users)
    const navigate = useNavigate()
    const [isvisible, setisvisible] = useState(false)
    const togglevisibility = () => {
        setisvisible(!isvisible)
    }
    const [isvisible1, setisvisible1] = useState(false)
    const togglevisibility1 = () => {
        setisvisible1(!isvisible1)
    }
    const [selectedcategory, setselectedcategory] = useState(null)
    const filtereddata = selectedcategory ? users.filter(user => user.category === selectedcategory) : users;
    const [maxvalue, setmaxvalue] = useState('')
    const [minvalue, setminvalue] = useState('')
    const [search, setsearch] = useState('')
    const handlesearch = (e) => {
        setsearch(e.target.value)
    }
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [objecttoshow, settoshow] = useState('');

    const filterByPriceRange = () => {
        let filteredData = [];
        if (filtereddata) {
            filteredData = filtereddata;
            if (minPrice !== '' && maxPrice !== '') {
                filteredData = filteredData.filter(user => user.price >= minPrice && user.price <= maxPrice && user.name.toLowerCase().includes(search.toLowerCase()));
            }
        }
        filteredData = filteredData.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        return filteredData;

    };

    const compare = (a, b, ascendingorder) => {
        if (a < b) {
            return ascendingorder ? -1 : 1;
        }
        if (a > b) {
            return ascendingorder ? 1 : -1;
        }
        return 0;
    };

    const handlechange = (value) => {
        let sortedData = [...objecttoshow];

        switch (value) {
            case 'ascending':
                sortedData.sort((a, b) => compare(a.name, b.name, true));
                break;
            case 'descending':
                sortedData.sort((a, b) => compare(b.name, a.name, true));
                break;
            case 'high':
                sortedData.sort((a, b) => compare(a.price, b.price, false));
                break;
            case 'low':
                sortedData.sort((a, b) => compare(b.price, a.price, false));
                break;
            default:
                break;
        }

        settoshow(sortedData);
    };

 const handleclick = (id)=>{
    navigate(`/productone/${id}`)
 }

    return (
        <>
            <Navbar />
            <div id="carouselExampleDark" class="carousel carousel-dark slide text-white" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div className='imgslide1'>
                            <div className='p1'>
                                <h2>Women collection 2024</h2>
                                <h1 className='display-1 fw-bold'>New Season</h1>
                                <button type='button' className='btn btn-primary rounded-pill fs-5 px-4' onClick={() => { navigate('/shop') }}>Shop now</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div className='imgslide2'>
                            <div className='p1'>
                                <h2>Men New-season</h2>
                                <h1 className='display-1 fw-bold'>Jackets & Coats</h1>
                                <button type='button' className='btn btn-primary rounded-pill fs-5 px-4' onClick={() => { navigate('/shop') }}>Shop now</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div className='imgslide3'>
                            <div className='p1'>
                                <h2>Men collection 2024</h2>
                                <h1 className='display-1 fw-bold'>New Arrivals</h1>
                                <button type='button' className='btn btn-primary rounded-pill fs-5 px-4' onClick={() => { navigate('/shop') }}>Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='row justify-content-center me-0 gap-1 mt-5'>
                <div className='col-lg-3 banner1 p-5 border'>
                    <p className='fs-1 fw-bold'>Women</p>
                    <p className='fs-5'>Spring 2024</p>
                    <button className='btn border-0 border-bottom border-dark'>Shop now</button>
                </div>
                <div className='col-lg-3 banner2 p-5 border'>
                    <p className='fs-1 fw-bold'>Men</p>
                    <p className='fs-5'>Spring 2024</p>
                    <button className='btn border-0 border-bottom border-dark'>Shop now</button>
                </div>
                <div className='col-lg-4 banner3 p-5 border'>
                    <p className='fs-1 fw-bold'>Accessories</p>
                    <p className='fs-5'>New Trend</p>
                    <button className='btn border-0 border-bottom border-dark'>Shop now</button>
                </div>
            </div>

            <p className='display-5 fw-bold mt-5 ms-5'>PRODUCT OVERVIEW</p>
            <div className='ms-5 me-2 fs-5'>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('') }}>All Products</button>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('women') }}>Women</button>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('men') }}>Men</button>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('bag') }}>Bag</button>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('shoe') }}>Shoes</button>
                <button className='btn border-0 me-2 btn1' onClick={() => { setselectedcategory('watch') }}>Watches</button>
                <div className='float-end'>
                    <button className='btn me-2 border-dark rounded-0' onClick={togglevisibility}> {isvisible ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faFilter} />} Filter</button>
                    <button className='btn border-dark rounded-0' onClick={togglevisibility1}>{isvisible1 ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faSearch} />} Search</button>

                </div>
                {isvisible && (
                    <div className='bg-light'>
                        <div className='row me-0'>
                            <div className='col-lg-6 p-4'>
                                <p className='fs-1'>Sort By</p>
                                <p className='btn1'>Default</p>
                                <p className='btn1'>Popularity</p>
                                <p className='btn1' onClick={() => handlechange('ascending')}>Name : A to Z</p>
                                <p className='btn1' onClick={() => handlechange('decending')}>Name:Z to A</p>
                                <p className='btn1' onClick={() => handlechange('low')}>Price:low to high</p>
                                <p className='btn1' onClick={() => handlechange('high')}>Price:high to low</p>
                            </div>
                            <div className='col-lg-6 p-4'>
                                <p className='fs-1' onClick={() => { setMinPrice(""); setMaxPrice(""); }}>All</p>
                                <p className='btn1 ' onClick={() => { setMinPrice(0); setMaxPrice(50); }}>$0.00 - $50.00</p>
                                <p className='btn1' onClick={() => { setMinPrice(50); setMaxPrice(100); }} >$50.00 - $100.00</p>
                                <p className='btn1' onClick={() => { setMinPrice(100); setMaxPrice(150); }} >$100.00 - $150.00</p>
                                <p className='btn1' onClick={() => { setMinPrice(150); setMaxPrice(200); }} >$150.00 - $200.00</p>
                                <p className='btn1' onClick={() => { setMinPrice(200); setMaxPrice(''); }}>$200.00+</p>

                            </div>
                        </div>
                    </div>
                )}
                {isvisible1 && (
                    <div>
                        <input type="text" className='w-100 fs-5 p-3' placeholder='Search...' value={search} onChange={handlesearch} />
                    </div>
                )}
            </div>

            <div class="row row-cols-1 row-cols-md-4 w-100 m-auto g-4 p-5">
                {filterByPriceRange() && filterByPriceRange()
                    .map((user) =>
                        <div class="col card1" key={user.id}>
                            <div class="card border-0">
                                <div className='ofhi'>
                                    <img src={user.url} className="cardzoom img-fluid" alt="..." />
                                    <button className='rounded-pill px-3 py-1 poab fs-5' type='button' onClick={()=>{handleclick(`${user.id}`)}}>Quick view</button>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{user.name} <span className='float-end'><i className='fa-regular fa-heart'></i></span></h5>
                                    <p class="card-text fs-5">${user.price}</p>
                                </div>
                            </div>
                        </div>)}
            </div>
            <div className='text-center mb-5'>
                <button className='border-0 px-3 py-2 fs-5 rounded-pill btn2'>Load More</button>
            </div>
            <Footer />
        </>
    )
}

export default Home
