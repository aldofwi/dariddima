import React, { useRef } from 'react';

function Home() {

    let audio = useRef('audio_tag')

    return (

        <div className="backhome">
        
            <div className="text-box">
                <h1>DaRiddima</h1>

                <div className="bubbles">
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                    <img src={require("../images/bubble.png")} alt="" />
                </div>
            </div>

            <audio  
                ref={audio}
                type="audio/mpeg"
                preload="true"
                autoPlay={true}
                src={require("../music/right time and place.mp3")}
            />

        </div>

    )
}

export default Home;
