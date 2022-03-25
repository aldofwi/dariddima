import React from 'react'
import "../components/styles.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

function Beats() {

    return (
        <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Beats</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>

        <div className='title'>Beats</div>

        <div className="Youtube">
            <YoutubeEmbed embedId="sh68ApmE3zs" />
        </div>

    </html>
    )
}

export default Beats;