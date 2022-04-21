import React, { useEffect, useState } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';


const KEY = 'pk_test_51KqbC1Iy4HUE4XIxOxEwHknzHjIPQnSOybdJzDwHDmQ2XVNLavD59jiIWj89P7zL5v1ZuaAkqVVsCxaPc856acC300GN2Iy9sm'

export default function Pay() {

    const [stripeToken,setStripeToken] = useState(null);


const onToken = (token) => {
    setStripeToken(token);
}

useEffect(() => {
  
    const makeRequest = async () => {

        try {
           const res = await axios.post('http://localhost:5000/api/checkout/payment',
           {
               tokenId: stripeToken.id,
               amount: 4000,
           }
           )

           console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

   stripeToken && makeRequest()
}, [stripeToken])


  return (
    <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <StripeCheckOut 
            name='E commerce' 
            image='https://cdn-icons-png.flaticon.com/512/219/219983.png'
            billingAddress
            shippingAddress
            description='total Achat $40'
            amount={4000}
            token={onToken}
            stripeKey={KEY}
        >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    cursor: 'pointer',
                    fontWeight: '600'
                }}
            >
                Pay Now
            </button>
        </StripeCheckOut>
        
    </div>
  )
}
