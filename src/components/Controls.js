import React, { useState, useRef, useContext } from 'react'
import playerContext from '../components/playerContext'

let Controls = () => {

    const {
        currentSong,
        nextSong,
        prevSong,
        repeat,
        random, 
        playing,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songslist,
    } = useContext(playerContext)

    const [statevolum, setStateVolum] = useState(0.3)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    let audio = useRef('audio_tag')

    const handleVolume = (q) => {
        setStateVolum(q)
        audio.current.volume = q
    }

    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause()

    const show = () => { 

            console.log(    "en Pause ?", audio.current.paused, 
                            " / playing =", playing, 
                            "\naudio.current = ", audio.current ) }

    const handleProgress = (value) => {
        let compute = (value * dur) / 100
        setCurrentTime(compute)
        audio.current.currentTime = compute
    }

    const fmtMMS = (s) => {
        return (s - (s %= 60)) / 60 + (10 < s ? ':' : ':0') + ~~s
    }

  return (
    <div className="controls">
        <audio  ref={audio}
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onCanPlay={(e) => setDur(e.target.duration)}
                onEnded={handleEnd}
                type="audio/mpeg"
                preload="true"
                autoPlay={true}
                src={songslist[currentSong].src}
            />
        <div className="vlme">
            <span className="volum">
                <i className="fas fa-volume-down"></i>
            </span>
            <input 
                value={Math.round(statevolum * 100)}
                type="range"
                name="volBar"
                id="volBar"
                onChange={(e) => handleVolume(e.target.value / 100)}
            />
        </div>

        <div className="musicControls">
            <span className="prev" onClick={() => {
                prevSong()
                show()
            }}>
                <i className="fas fa-step-backward"></i>
            </span>

            <span 
                className="play"
                onClick={() => {
                    togglePlaying()
                    toggleAudio()
                }}
                >
            
                <span className={!playing ? '' : 'hide'}>
                    <i className="fas fa-play"></i>
                </span>

                <span className={!playing ? 'hide' : ''}>
                    <i className="fas fa-pause"></i>
                </span>
            </span>

                <span className="next" onClick={() => {
                    nextSong()
                    show()
                }}>
                    <i className="fas fa-step-forward"></i>
                </span>       
        </div>

        <div className="progressb">
            <div className="songMeta">
                <span className="songtitle">
                    {songslist[currentSong].name}
                </span>
            </div>
            <progress
                id="prgbar"
                value={dur ? (currentTime * 100) / dur : 0 }
                max="100"
                onClick={(e) => handleProgress(((e.clientX - e.target.offsetLeft) / e.target.offsetWidth) * 100, )}
            ></progress>

            <div className="time_tofrom">
                <span className="currentT">{fmtMMS(currentTime)}</span>/
                <span className="totalT">{fmtMMS(dur)}</span>
            </div>
        </div>

        <div className="plsoptions">
            <span
                onClick={toggleRandom}
                className={'random ' + (random ? 'active' : '')}
            >
                <i className="fas fa-random fa-lg"></i>
            </span>
            <span
                onClick={toggleRepeat}
                className={'repeat ' + (repeat ? 'active' : '')}
            >
                <i className="fas fa-redo-alt fa-lg"></i>
            </span>
        </div>
    
    </div>
  )
}

export default Controls