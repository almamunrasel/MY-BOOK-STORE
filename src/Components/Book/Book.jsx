import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';








const Book = ({singleBook}) => {

  const{bookName,bookId,image,rating,category,tags,yearOfPublishing,publisher}=singleBook
 



  return (
     
    <Link to={`/bookDetails/${bookId}`}>
     <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
  <figure className='p-4 bg-gray-200 w-8/10 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

   <div className='flex justify-center gap-10'>
     {
      tags.map(tag=> <button>{tag}</button>)
    }
   </div>

    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book  By:{publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline border-none font-semibold">{category}</div>
      <div className="badge badge-outline border-none font-semibold">{rating} <FaStarHalfStroke /> </div>
    </div>
  </div>
</div>
    </Link>
   
  );
};

export default Book;