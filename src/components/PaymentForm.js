import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios"

// import "../styles/input.css"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee",
        }

    }
}

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange,
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className="FormRowLabel">
        {label}
      </label>
      <input
        className="FormRowInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );

function PaymentForm() {

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName]   = useState("")

    const [success, setSuccess] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {

        e.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
                email,
                phone,
                name
            },
        })

        if(!error) {

            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 50000,
                    id
                })

                if(response.data.success) {
                    console.log("Successful Payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error : ", error.response)
            }

        } else {
            console.log(error.message)
        }
    }

    return (

        <>
        
        {!success ?

        <div className='pricing'>
        
        <form className="Form" onSubmit={handleSubmit}>

            <fieldset className="FormGroup">

                <Field
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                />

                <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="janedoe@gmail.com"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    placeholder="(941) 555-0123"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
                />

                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>

            </fieldset>

            <button>Pay</button>
        </form>
        </div>
            :
        <div className='pricing'>
            <p className='mb-3'><h2>You just bought a sweet Riddim !</h2></p>
        </div>
        }

        </>

    )
}

export default PaymentForm