import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
 const {id}=useParams();
 const bookId = parseInt(id);
 const data = useLoaderData();
 const singleBook = data.find(book => book.bookId===bookId);

 const {bookName,image}=singleBook;
 const handleMarkAsRead = id =>{
  //localStorage
  //store with id
  //where to store
  //array or collection
  //if book already exist then show a alert
  //if book not exist then push in the collection or array
  addToStoredDB(id);
 }
 
  return (
    <div className='w-2/3 mx-auto mt-10'>
      <img src={image} className='w-48' alt="" />
      <h5>{bookName}</h5>

      <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent m-2'>Mark as Read</button>
      <button className='btn btn-info m-2'>Add to WishList</button>
      
    </div>
  );
};

export default BookDetails;