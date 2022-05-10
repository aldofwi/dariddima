
let playerReducer = (state, action) => {

    switch(action.type) {
        case 'SET_SONGS_ARRAY' : 
            return {
                ...state,
                songslist: action.data
            }
        case 'SET_CURRENT_SONG' : 
            console.log("Action => ", action)
            console.log("State => ", state)
            return {
                ...state,
                currentSong: action.data,
                playing: true,
            }
        case 'TOGGLE_RANDOM' : 
            console.log("Action => ", action)
            console.log("State => ", state)
            return {
                ...state,
                random: action.data
            }
        case 'TOGGLE_REPEAT' : 
            console.log("Action => ", action)
            console.log("State => ", state)
            return {
                ...state,
                repeat: action.data
            }
        case 'TOGGLE_PLAYING' : 
            console.log("Action => ", action)
            console.log("State => ", state)
            return {
                ...state,
                playing: action.data
            }
        default: 
            return state
    }

}

export default playerReducer