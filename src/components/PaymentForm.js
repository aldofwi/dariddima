import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios"
import "../styles/input.css"

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

const Checkbox = ({
  label,
  checked,
  onChange,
}) => ( 
  <div className="FormRow">
    <label className="FormRowLabelCheck">
      <input
        className="FormRowCheck"
        type="checkbox"
        required
        checked={checked}
        onChange={onChange}
      />
        {label}
      </label>
  </div>
);

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

  const Listing = ({
    label,
    label1,
    label2,
    id,
    id2,
    type,
    placeholder,
    value,
    onChange,
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className="FormRowLabel">
        {label}
      </label>
      <select
        className="FormRowSelect"
        id={id}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      >
        <option value="" hidden>Choose a product</option>
        <option value="Barrio">Barrio</option>
        <option value="HardBrain">HardBrain</option>
        <option value="Nomad">Nomad</option>
        <option value="TastyToo">TastyToo</option>
        <option value="FireBird">FireBird</option>
        <option value="Pyrolyse">Pyrolyse</option>
        <option value="Awoo">Awoo</option>
      </select>
      <label htmlFor={id2} className="FormRowPacked">
        {label1+" "+label2}
      </label>
    </div>
  );

function myAlertFailure() {

  document.getElementById("myAlert-ko").style.display = 'block';
  
  setTimeout( function(){ document.getElementById("myAlert-ko").style.display = 'none'; }, 5000);
}

function PaymentForm(props) {

    const [riddim, setRiddim]   = useState("")
    const [email, setEmail]     = useState("")
    const [phone, setPhone]     = useState("")
    const [name, setName]       = useState("")
    const [err, setErr]         = useState("")

    const [checked, setChecked] = useState(false)
    // const [success, setSuccess] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {

        e.preventDefault()

        // console.log("\nChoosen Riddim : ", riddim)

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
                    amount: props.pricing*100,
                    product: riddim,
                    pack: props.packaging,
                    id
                })

                if(response.data.success) {
                    console.log("Successful Payment")               
                  }

            } catch (error) {
                console.log("Catch Error : ", error.response)
            }

            props.setShowItem(false)
            props.setShowNotif("success") // Alert Success 

        } else {
            console.log("Else Error : ", error.message)
            setErr(error.message)
            myAlertFailure()
            props.setShowItem(true)
            // props.setShowNotif("error") // Alert Danger
        }


    }

    return (

        <>

        <div className='pricing'>

        <div className="child1 child2">
          <div className="myAlert-ko alert alert-danger" id="myAlert-ko">
              <a href="/pricing" className="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Failure</strong><br></br>
              An error occured during the purchase process <strong>of the Riddim </strong>!<br></br> 
              {err} Please, Try again.
          </div>
        </div>
        
        <form className="Form" onSubmit={handleSubmit}>

            <fieldset className="FormGroup">

                <Listing
                    label="Riddim"
                    id="riddim"
                    label1="Pack"
                    label2={props.packaging}
                    id2="pack"
                    type="select"
                    onChange={(event) => { setRiddim(event.target.value) }}
                />

            </fieldset>

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

              <fieldset className="FormGroup">

                <Checkbox
                    id="checkbox"
                    label={<label>I agree to <a href='/'>Terms & Conditions</a></label>}
                    checked={checked}
                    onChange={(event) => { setChecked(!checked) }}
                />
              
              </fieldset>

            <button className="payform">Pay {props.pricing}€</button>

        </form> 

        </div>

        </>

    )
}

export default PaymentForm