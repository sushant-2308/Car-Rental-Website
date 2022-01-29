import React from 'react';
import { Container } from 'react-bootstrap';
import './Invoice.css';

const Invoice = () =>{
    return(
        
        <>
        <Container className='invoice'>
            <div>
            <h1 className='h1-invoice'>
                Tax Invoice
            </h1>
            </div>
            <div>
                <h3 className='h3-invoice-primary'>
                    Invoice Number: #WDCR00001
                </h3>
                <h3>
                    Booking ID: WDCR01
                </h3>
                <hr className='hr-invoice' />
                <div className='invoice-details'>
                <span>
                    Customer's Name: Satvik Shrivas.
                </span>
                <span>
                    Customer's Email ID: satvikshrivas@gmail.com
                </span>
                <span>
                    Customer's Contact No: 8319485277
                </span>
                <span>
                    Number of People: 5
                </span>
                <span>
                    Pick-up Date: 2/12/2021
                </span>
                <span>
                    Drop-off Date: 4/12/2021
                </span>
                <span>
                    Address: DDU Nagar, Raipur (C.G.)
                </span>
                <hr />
                <span>
                    Total No. Days: 2 Days
                </span>
                <span>
                    Grand Total: 2000/- rs.
                </span>
                <span>
                    Payment Mode: Cash on Delivery.
                </span>
            </div>
            </div>
            </Container>
        </>
       
    );
}

export default Invoice;