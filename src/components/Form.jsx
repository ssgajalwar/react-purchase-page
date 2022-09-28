import React from 'react';
import './Form.css';
import Payment from './Payment';
import Validation from './Validation';


const Form = () => {
  return (
    <div className='form'>
       <Validation/>
       <Payment/>
       
    </div>
  )
}

export default Form