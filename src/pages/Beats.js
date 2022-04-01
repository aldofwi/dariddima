import React from 'react'
import "../components/styles.css"

function Beats() {

    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Beats</title>
                <link rel="stylesheet" href="../components/style.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>

            <div class="bodypl">
            <div className="wrapper">
                <div className="top-bar">
                    <i className="material-icons">expand_more</i>
                    <span>Now Playing</span>
                    <i className="material-icons">more_horiz</i>
                </div>
                
                <div className="img-area">
                    <img src="../images/barrio.png" alt="" />
                </div>

                <div class="song-details">
                    <p class="name">BARRIO Instrumental</p>
                </div>

                <div class="progress-area">
                    <div class="progress-bar">
                        <span></span>
                    </div>
                    <div class="timer">
                        <span class="current">0:20</span>
                        <span class="current">3:40</span>
                    </div>
                </div>
                <div class="controls">

                    <i id="repeat-plist" className="material-icons">repeat</i>
                    <i id="prev" className="material-icons">skip_previous</i>
                    
                    <div class="play-pause">
                        <i className="material-icons">play_arrow</i>
                    </div>

                    <i id="next" className="material-icons">skip_next</i>
                    <i id="more-music" className="material-icons">queue_music</i>

                </div>

            </div>
            </div>

        </html>
    )
}

export default Beats;