import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import Bookimg from "../../images/about-img.jpg";

const Books = () => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {Bookimg} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>Haseeb khan</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>Cheebo</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>2000</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>2010</span>
        </div>
      </div>
    </div>
    //book 2
   


    
  )
}

export default Books;