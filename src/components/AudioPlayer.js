import React from 'react'

import "../main.css"
import "../input.css"
import Controls from './Controls'
import Playlist from './Playlist'
import PlayerState from './PlayerState'

let AudioPlayer = () => {

    return (

        <PlayerState>

        <div className="audioplayer">
            <div className="inside_content">
            
                <Playlist />

            </div>

            <Controls />
            
        </div>

        </PlayerState>
    )

}

export default AudioPlayer
