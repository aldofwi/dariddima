import React from 'react'

function About() {

    return (
    <div>
        
            <title>About</title>

        <div className='title'>About</div>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        <div className='about'>
            <p className="alinea"></p>

            <p className="alinea"></p>
            <p className="alinea"></p>
            <p className="alinea"></p>

                <figure className="text">
                    <blockquote>
                        <p className="mb-3"><i>DaRiddima is an authentic Beatmaker, </i></p>
                        <p className="mb-3"><i>From Riddim instrumentals to Urban Beats, he got what you need.</i></p>
                        <p className="mb-3"><i>Also available for all proposals, it's all about music.</i></p>
                    </blockquote>
                    <figcaption>
                        <p className="alinea">—<cite title="Source Title">The Source</cite></p>
                    </figcaption>
                </figure>
        </div>

        <div class="about-image">
            <img src={require("../images/bnh.png")} alt="Joka" /> 
        </div>
       
    </div>
    )
}

export default About