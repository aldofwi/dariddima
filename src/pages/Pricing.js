import React, { useState } from 'react' ;
import "../styles/App.css"

import StripeContainer from '../components/StripeContainer';

function myAlertSuccess() {

    document.getElementById("myAlert-top").style.display = 'block';
    
    setTimeout( function(){ 
        document.getElementById("myAlert-top").style.display = 'none'; 
    }, 5000);
}


function Pricing(props) {

    const [showNotif,   setShowNotif]  = useState("");
    const [showItem,    setShowItem]   = useState(false);
    const [price,       setPrice]      = useState(0);  
    const [pack,        setPack]       = useState("");  

    console.log("showNotif = ", showNotif) // value can not passed

    // if(showNotif) myAlertTop()

    if(showNotif === "success") myAlertSuccess()
    // else if (showNotif === "error") myAlertFailure()

    return (
        
        <div>

            <title>Pricing</title>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div className='pricing'>
                    <div className='title_pricing'>Pricing</div>
                </div>

        { showItem ? <StripeContainer value={price} package={pack} setShowItem={setShowItem} setShowNotif={setShowNotif} /> : 

        <div className='pricing'>

            <div className="child1">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <p className="fs-5 text-muted">All songs including our production must be credited as "Produced by DaRiddima".</p>
                    <p className="fs-5 text-muted">Perfect for indie artists working on different type of projects.</p>
                </div>
            </div>

            <div className="child1 child2">
                <div className="myAlert-top alert alert-success" id="myAlert-top">
                    <a href="/pricing" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Success</strong><br></br>
                    <strong>Well done!</strong> You successfully bought <strong>a sweet Riddim </strong>! Check your mailbox & Enjoy IT.
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Standard</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{process.env.REACT_APP_STANDARD_PRICE}<small className="text-muted fw-light"> €</small></h1>
                        
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Non-Exclusive Rights</li>
                        </ul>
                        <button 
                            type="button" 
                            className="w-100 btn btn-lg btn-outline-primary" 
                            onClick={() => {    setShowItem(true);
                                                setPrice(process.env.REACT_APP_STANDARD_PRICE);
                                                setPack(process.env.REACT_APP_STANDARD_PACK);
                                    }}>Get Standard</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Premium</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{process.env.REACT_APP_PREMIUM_PRICE}<small className="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button 
                            type="button" 
                            className="w-100 btn btn-lg btn-primary" 
                            onClick={() => {    setShowItem(true);
                                                setPrice(process.env.REACT_APP_PREMIUM_PRICE);
                                                setPack(process.env.REACT_APP_PREMIUM_PACK);
                                }}>Get Premium</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-secondary">
                    <div className="card-header py-3 text-white bg-dark border-primary">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{process.env.REACT_APP_PRO_PRICE}<small className="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Royalty Free Sales</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button 
                            type="button" 
                            className="w-100 btn btn-lg btn-outline-secondary" 
                            onClick={() => {    setShowItem(true);
                                                setPrice(process.env.REACT_APP_PRO_PRICE);
                                                setPack(process.env.REACT_APP_PRO_PACK);
                                }}>Get Pro</button>
                    </div>
                    </div>
                </div>

            </div>

        </div>

        }

    </div>
    )
}

export default Pricing
