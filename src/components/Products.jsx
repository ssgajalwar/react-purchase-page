import React from 'react';
import './Products.css';
import LiveChat from '../images/live-chat.png';
import Telephone from '../images/telephone.png';
import Email from '../images/email.png';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// let product1= 
// function valueCalculate(){

// }

const Products = () => {
  var newVal,discount;
   const[value,setValue] = useState(0);
   const[value2,setValue2] = useState(0);
  //  const[discount,setDiscount] = useState(0);
   console.log(value)
   console.log(value2)
   const notify = () => toast("Order Plaaced successful");
   
   
   
   //  console.log(discount)
    
    discount = (value+value2)/10;
    newVal = (value+value2)-discount;
  
  

  return (
    <div className='products'>
    <h3>Ordersummary</h3>
       <div className="product-card">
        <img className='productimg' src="https://cdna.artstation.com/p/assets/images/images/040/696/428/large/calvin-bacon-shoe-render-2-00129.jpg?1629641722" alt="" />
        <div className='data'>
         <h4>Classic sneaker</h4>
         <p>size:20</p>
         <input type="number"  min="1" max="10"  
         onChange={(e) => {
          setValue(e.target.value*199);
        
         }}/>
        </div>
        <p className='price'>$199.99</p>
       </div>
       <div className="product-card">
       <img className='productimg' src="https://cdn.dribbble.com/users/2629494/screenshots/15413660/media/51341f7551fa388429370b9962ee7f8d.jpg?compress=1&resize=400x300&vertical=top" alt="" />
        <div className='data'>
         <h4>Lightning sneaker</h4>
         <p>size:20</p>
         <input type="number"  min="1" max="10"
           onChange={(e) => {
            setValue2(e.target.value *199);          
           }}/>
         
        </div>
        <p className='price'>$199.99</p>
       </div>
       <div className="offer">
        <div className="cupon-code">
        <input className='discount' type="text"  placeholder='Discount Coupen' />
        <button className='coupen-btn'>Apply</button>
        </div>
        <ul className='final-receipt'>
          <li>Subtotal</li>
          <li>${value+value2}</li>
        </ul>
        <ul className='final-receipt'>
          <li>shopping cost</li>
          <li>${value+value2}</li>
        </ul>
        <ul className='final-receipt'>
          <li>Discount</li>
          <li>${discount}</li>
        </ul>
        <ul className='total'>
          <li>Ordar total</li>
          <li>${newVal}</li>
        </ul>
        <div className="submit">
          <button type='submit' onClick={notify}  value="submit" >Place Order</button>
          <ToastContainer />
        </div>
        <div className="support">
          <p>Have question or need help to complete your order</p>
          <div className='social'>
             
              <img className="social-icon" src={LiveChat} alt="" />
              <p>Live Chat</p>
              <img className="social-icon" src={Telephone} alt="" />
              <p>Make a call</p>
              <img className="social-icon" src={Email} alt="" />
              <p>email support</p>
            
          </div>
        </div>
       </div>
    </div>
  );
}

export default Products;