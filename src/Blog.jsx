import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import Footer from './Footer';

function Blog() {
  const [users] = useSelector((state) => state.users)
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <Navbar />
      <div className='bg02 display-3 fw-bold text-center'>
        <p className='p2'>Blog</p>
      </div>
      <div className='row me-0 p-5'>
        <div className='col-lg-8'>
          <div className='of'>
            <div className='bg03 pore1'>
              <div className='box1 poab1 px-3 text-center'>
                <p className='fs-1 fw-bold'>22</p>
                <p>Jan 2024</p>
              </div>
            </div>
          </div>
          <p className='fs-2 fw-bold'>
            8 Inspiring Ways to Wear Dresses in the Winter
          </p>
          <p className=''>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
          </p>
          <p>
            By Admin |
            StreetStyle, Fashion, Couple |
            8 Comments <span className='float-end'>CONTINUE READING <i class="fa-solid fa-arrow-right"></i></span>
          </p>
          <div className='of'>
            <div className='bg04 pore1'>
              <div className='box1 poab1 px-3 text-center'>
                <p className='fs-1 fw-bold'>18</p>
                <p>Jan 2024</p>
              </div>
            </div>
          </div>
          <p className='fs-2 fw-bold'>
            The Great Big List of Men’s Gifts for the Holidays
          </p>
          <p className=''>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius          </p>
          <p>
            By Admin |
            StreetStyle, Fashion, Couple |
            8 Comments <span className='float-end'>CONTINUE READING <i class="fa-solid fa-arrow-right"></i></span>
          </p>
          <div className='of'>
            <div className='bg05 pore1'>
              <div className='box1 poab1 px-3 text-center'>
                <p className='fs-1 fw-bold'>16</p>
                <p>Jan 2024</p>
              </div>
            </div>
          </div>
          <p className='fs-2 fw-bold'>
            5 Winter-to-Spring Fashion Trends to Try Now
          </p>
          <p className=''>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
          </p>
          <p>
            By Admin |
            StreetStyle, Fashion, Couple |
            8 Comments <span className='float-end'>CONTINUE READING <i class="fa-solid fa-arrow-right"></i></span>
          </p>
        </div>
        <div className='col-lg-4'>
          <p><input type="text" className='form-control rounded-pill py-3 border-dark' placeholder='Search' /></p>
          <p className='fs-1 fw-bold'>Categories</p>
          <p className='border-top border-bottom border-dark py-3'>Fashion</p>
          <p className=' border-bottom border-dark py-2'>Beauty</p>
          <p className=' border-bottom border-dark py-2'>Street Style</p>
          <p className=' border-bottom border-dark py-2'>Life Style</p>
          <p className=' border-bottom border-dark py-2'>DIY & Crafts</p>
          <div className=''>
            <p className='fs-1 fw-bold'>Featured Products</p>
            <p>Showing {indexOfFirstCard + 1}–{Math.min(indexOfLastCard, users.length)} of {users.length} results</p>

            {currentCards && currentCards.map((user) => (
              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={user.url} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{user.name}</h5>
                      <p class="card-text"><small class="text-muted">${user.price}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination w2 m-auto mt-5">
            {Array.from({ length: Math.ceil(users.length / cardsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <a href="#" className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</a>
              </li>
            ))}
          </ul>
          <div className='fs-1 fw-bold'>Archive</div>
          <div className='p-3'>
          <p>July 2018 <span className='float-end'>(9)</span></p>
          <p>June 2018 <span className='float-end'>(39)</span></p>
          <p>May 2018 <span className='float-end'>(29)</span></p>
          <p>April 2018 <span className='float-end'>(35)</span></p>
          <p>March 2018 <span className='float-end'>(22)</span></p>
          <p>February 2018 <span className='float-end'>(32)</span></p>
          <p>January 2018 <span className='float-end'>(21)</span></p>
          <p>December 2017 <span className='float-end'>(26)</span></p>
          </div>
          <div>
            <p className='fw-bold fs-1'>Tags</p>
            <button className='btn rounded-pill border'>Fashion</button>
            <button className='btn rounded-pill border'>Lifestyle</button>
            <button className='btn rounded-pill border'>Denim</button>
            <button className='btn rounded-pill border'>Streetstyle</button>
            <button className='btn rounded-pill border'>Crafts</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Blog
