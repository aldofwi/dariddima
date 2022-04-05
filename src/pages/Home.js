import React from 'react';

function Home() {

    return (

        <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Beats</title>
            <link rel="stylesheet" href="../components/styles.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </head>

        <body>
            <div className="bodypl">
            <div className="wrapper">

                <div className="top-bar">
                    <i className="material-icons">expand_more</i>
                    <span>Now Playing</span>
                    <i className="material-icons">more_horiz</i>
                </div>
                
                <div className="img-area">                   
                    <img src="" alt="" />
                </div>

                <div className="song-details">
                    <p className="name"></p>
                </div>

                <div className="progress-area">
                    <div className="progress-bar">
                        <span></span>
                    </div>

                    <div className="timer">
                        <span className="current">0:20</span>
                        <span className="current">3:40</span>
                    </div>
                </div>

                <div className="controls">

                    <i id="repeat-plist" className="material-icons">repeat</i>
                    <i id="prev" className="material-icons">skip_previous</i>
                    
                    <div className="play-pause">
                        <i className="material-icons">play_arrow</i>
                    </div>

                    <i id="next" className="material-icons">skip_next</i>
                    <i id="more-music" className="material-icons">queue_music</i>

                </div>

                <div className="music-list">
                    <div className="header">
                        <div className="row">
                            <i className="material-icons">queue_music</i>
                            <span>Music List</span>
                        </div>
                        <i id="close" className="material-icons">close</i>
                    </div>
                    <ul>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                        <li>
                            <div className="row">
                                <span>Firebird Instrumental</span>
                            </div>
                            <span className="audio-duration">3:40</span>
                        </li>
                    </ul>
                </div>

            </div>

            <script src="../js/music-list.js"></script>
            <script src="../js/script.js"></script>

            </div>
        </body>
        </html>

    )
}

export default Home;
