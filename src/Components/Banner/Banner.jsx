import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className='bg-[#1313130d] flex justify-around items-center p-16 rounded-2xl'>
      <div>
        <h1 className='text-5xl'>Books to freshen up your bookshelf!</h1>
        <button className='btn btn-primary mt-4'>View The List</button>
      </div>
      <div>
        <img src={bookimage} alt="" className='rounded-xl' />
      </div>
      
    </div>
  );
};

export default Banner;