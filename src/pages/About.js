import React from 'react'

function About() {

    return (
        <html>
        
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>About</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>

        <div className='title'>About</div>
        
        <div className='about'>
            <p className="alinea"></p>

            <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-3"><i>DaRiddima is an authentic Beatmaker, </i></p>
                        <p className="mb-3"><i>From Riddim instrumentals to Urban Beats, he got what you need.</i></p>
                        <p className="mb-3"><i>Also available for all proposals, it's all about music.</i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <p className="alinea">—<cite title="Source Title">The Source</cite></p>
                    </figcaption>
                </figure>

                <p className="alinea"></p>
                <p className="alinea"></p>
                <p className="alinea"></p>

                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-3"><i>DaRiddima est un authentique Beatmaker,</i></p>
                        <p className="mb-3"><i>Entre Riddims & Urban Beats, il a forcément ce que tu recherches. </i></p>
                        <p className="mb-3"><i>Disponible pour toutes vos propositions, tout type de style musical.</i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <p className="alinea">—<cite title="Source Title">La Source</cite></p>
                    </figcaption>

                </figure>

        </div>
    </html>
    )
}

export default About