import React, { useReducer } from 'react'
import playerReducer from './playerReducer'
import playerContext from './playerContext'

import { song_list } from '../js/song'

const PlayerState = (props) => {
    const initialState = {
        currentSong: 0,
        songslist: song_list,
        repeat: false,
        random: false, 
        playing: true,
        audio: null,
    }

    const [state, dispatch] = useReducer(playerReducer, initialState)

    // Set current song
    const SetCurrent = (id) => dispatch({type : 'SET_CURRENT_SONG', data : id})

    // Set songs array
    const songsSet = (songsArr) => dispatch({type : 'SET_SONGS_ARRAY', data : songsArr})

    // Set playing state (play/pause btn)
    const togglePlaying = () => dispatch({type : 'TOGGLE_PLAYING', data : state.playing ? false : true})

    // Previous song
    const prevSong = () => {

        if(state.random) {
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~~(Math.random() * state.songslist.length),
            })
        } else {

            if(state.currentSong === 0) { 
                SetCurrent(state.songslist.length - 1) } 
            else { SetCurrent(state.currentSong - 1) }
        }

        console.log("(prev) Playing = ", state.playing);
    }

    // Next song
    const nextSong = () => {

        console.log("Random math : ", ~~(Math.random() * state.songslist.length) - 1)

        if(state.random) {
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~~(Math.random() * state.songslist.length),
            })
        } else {
            if(state.currentSong === state.songslist.length - 1) { 
                SetCurrent(0) } 
            else { 
                SetCurrent(state.currentSong + 1) 
            }
        }

        console.log("(next) Playing = ", state.currentSong, " => ", state.playing);
    }

    // Repeat & Random
    const toggleRepeat = (id) => dispatch({ type : 'TOGGLE_REPEAT', data : state.repeat ? false : true })
    const toggleRandom = (id) => dispatch({ type : 'TOGGLE_RANDOM', data : state.random ? false : true })

    // End of song
    const handleEnd = () => {

        console.log("Random math : ", ~~(Math.random() * state.songslist.length))

        if(state.random) {
            return dispatch({
                type: 'SET_CURRENT_SONG',
                data: ~~(Math.random() * state.songslist.length),
            })
        } else {
            if(state.repeat) {
                nextSong()
            } else if(state.currentSong === state.songslist.length - 1) {
                return
            } else {
                nextSong()
            }
        }
    }

    return <playerContext.Provider
        value={{
            currentSong: state.currentSong,
            songslist: state.songslist,
            repeat: state.repeat,
            random: state.random, 
            playing: state.playing,
            audio: state.audio,
            prevSong,
            nextSong,
            SetCurrent,
            toggleRandom,
            toggleRepeat,
            togglePlaying,
            handleEnd,
            songsSet,
        }}>
            {props.children}
        </playerContext.Provider>
}

export default PlayerState
