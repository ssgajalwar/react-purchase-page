import React from 'react';
import './Payment.css'

const Payment = () => {
  return (
    <div className='payment'>
        <h3 className='block'>shipping method</h3>
        <div className="shipping-method">
            <div className="method">
                <input type="radio" name="delivery-method" id="express" />
                <div className='payment-box'>
                <label htmlFor="delivery-method">Express <span>$14.99</span></label>
                <p>Dispatched in 24 hours</p>
                </div>
            </div>
            <div className="method">
                <input type="radio" name="delivery-method" id="standard" />
                <div className='payment-box'>
                <label htmlFor="delivery-method">Standard <span>$4.99</span></label>
                <p>Dispatched in 1 - 2 days</p>
                </div>
            </div>
        </div>
       
        <h3 className='block'>Payment information</h3>
        <div className="shipping-method">
            <div className="method">
                <input type="radio" name="payment-method" id="express" />
                <div className='payment-box'>
                <label htmlFor="delivery-method">Credit card</label>
                <p>Pay with credit card via stripe</p>
                </div>
            </div>
            <div className="method">
                <input type="radio" name="payment-method" id="paypal" />
                <div className='payment-box'>
                <label htmlFor="delivery-method">Paypal</label>
                <p>Pay with your paypal account</p>
                </div>
            </div>
        </div>

        <div className='card-details'>
            <div className="card-details-row">
                <label htmlFor="no">Credit Card number</label>
                <input type="text" placeholder='Card number'/>
            </div>
            <div className="card-details-row">
                <label htmlFor="no">Name of Card</label>
                <input type="text" placeholder='Card name'/>
            </div>
        </div>
        <div className='card-details'>
            <div className="card-details-row">
                <label htmlFor="no">expiry date</label>
                <input type="month" />
            </div>
            <div className="card-details-row">
                <label htmlFor="no">CVV/CVC</label>
                <input type="text" placeholder='CVC'/>
            </div>
        </div>
    </div>
  )
}

export default Payment