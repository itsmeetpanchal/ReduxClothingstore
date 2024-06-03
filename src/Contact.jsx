import React, { useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import Footer from './Footer';

function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const [users] = useSelector((state) => state.users);

  // Function to filter users based on selected category
  const filteredUsers = selectedCategory ? users.filter(user => user.category === selectedCategory) : users;

  return (
    <>
      <Navbar />
      <div className='bg09 display-3 fw-bold text-center'>
        <p className='p2'>Contact</p>
      </div>
      <div className='m-5 row border'>
        <div className='col-lg-6 border-end text-center p-5'>
          <p className='fs-1'>Send Us A Message</p>
          <div className='d-flex align-items-center fs-5 px-3 py-2 m-auto border border-dark w-75'>
            <i className='fa-solid fa-envelope'></i>
            <input type="text" placeholder='Search...' className='border-0 w-100' />
          </div>
          <div className='mt-3'>
            <textarea rows={5} cols={58} placeholder='How Can We help?' className='w-100'></textarea>
          </div>
          <div className='btn btn-dark text-white w-75 fs-5 mt-3 rounded-pill'>SUBMIT</div>
        </div>
        <div className='col-lg-6 p-5'>
          <div className='fs-5'>
            <i className='fa-solid fa-location-dot'></i>&nbsp;<span className='fs-2 ms-2'>Address</span>
            <p className='w-50 ms-4'>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          </div>
          <div className='fs-5'>
            <i className='fa-solid fa-phone'></i>&nbsp;<span className='fs-2 ms-2'>
              Lets Talk</span>
            <p className='w-50 ms-4'>+1 800 1236879</p>
          </div>
          <div className='fs-5'>
            <i className='fa-solid fa-envelope'></i>&nbsp;<span className='fs-2 ms-2'>Sale Support</span>
            <p className='w-50 ms-4'>
              contact@example.com</p>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14922.388693957333!2d72.9808896!3d20.767115150000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715247835207!5m2!1sen!2sin" width="100%" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer/>
    </>
  );
}

export default Contact;
