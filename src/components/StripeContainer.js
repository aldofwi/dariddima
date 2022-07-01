import React from 'react'
import PaymentForm from './PaymentForm'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51L5uY2Aa1NOGB95Z1aHMjaVWrfiyEzIDllYNOOKfkl9IzMUImUTBlCoEpv4t4SUeCMxHWXUH7kkQ5BfQakZbT3Gf00N7LAScze"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer(props) {

  return (

    <Elements stripe={stripeTestPromise}>

        <PaymentForm setShowItem={props.setShowItem} setShowNotif={props.setShowNotif} pricing={props.value} packaging={props.package} />
    
    </Elements>

  )
}

export default StripeContainer