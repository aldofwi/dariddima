import React, { useState } from 'react' ;
import "../styles/App.css"

import StripeContainer from '../components/StripeContainer';

function Pricing() {

    const [showItem, setShowItem] = useState(false);

    return (
        <div>

            <title>Pricing</title>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                <div className='pricing'>
                    <div className='title'>Pricing</div>
                </div>

        { showItem ? <StripeContainer /> : 
            
        <div className='pricing'>

            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <p className="fs-5 text-muted">All songs including our production must be credited as "Produced by DaRiddima".</p>
                <p className="fs-5 text-muted">Perfect for indie artists working on different type of projects.</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Standard</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">150<small className="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Non-Exclusive Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={() => setShowItem(true)}>Get Standard</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Premium</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">300<small className="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => setShowItem(true)}>Get Premium</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-secondary">
                    <div className="card-header py-3 text-white bg-dark border-primary">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">500<small className="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Royalty Free Sales</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-secondary" onClick={() => setShowItem(true)}>Get Pro</button>
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
