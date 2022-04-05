
import React from 'react' ;

function Pricing() {

    return (
        <html>
        
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pricing</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        </head>

        <div className='pricing'>

            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <div className='title'>Pricing</div>
                <p>---</p>
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
                        <h1 className="card-title pricing-card-title">100<small class="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Non-Exclusive Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get Standard</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-3 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Premium</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">250<small class="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Instant Download</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Get Premium</button>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-secondary">
                    <div className="card-header py-3 text-white bg-dark border-primary">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">500<small class="text-muted fw-light"> €</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Untagged WAV & MP3</li>
                        <li>PDF Contract</li>
                        <li>Royalty Free Sales</li>
                        <li>Synchronization Rights</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Get Pro</button>
                    </div>
                    </div>
                </div>

            </div>

        </div>

    </html>
    )
}

export default Pricing