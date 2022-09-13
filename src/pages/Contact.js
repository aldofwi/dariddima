import React from 'react'

function Contact() {
    return (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> Follow Us</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>

        <div className='title'>Follow Me</div>

        <div className="contact-image">
            <img src={require("../images/joka.png")} alt="Joka" /> 
        </div>

        <div className='contact'>
            
            <div className="social-menu"> 
                <ul>
                    <a href="https://www.instagram.com/dariddima/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/dariddimamusic/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a> 
                    <a href="https://www.youtube.com/c/dariddimamusic" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                    <a href="https://twitter.com/NH_Carter" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="mailto:dariddima@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a>
                </ul>  
                         
            </div>
        </div>

        
       
    </html>
    )
}

export default Contact