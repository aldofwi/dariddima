import React, { useContext } from 'react'

import playerContext from '../components/playerContext'

let Playlist = () => {

    /*
    // INSIDE UL
            { songslist.map((song, i) => 
                <li className={ 'songContainer' + (currentSong===i ? 'selected' : '')}
                    key={i}
                    onClick={() =>  {SetCurrent(i)}}
                >
                    <div className="tmbn_song">
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="songmeta_playlist">
                        <span className={'songContainer' + (currentSong===i ? ' selected' : '')}>{song.name}</span>
                    </div>
                    
                </li>
            )}
*/

    const {
        songslist, 
        currentSong, 
        SetCurrent} = useContext(playerContext)

  return (

    <div className="playlist">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        <img src={songslist[currentSong].img} alt="" />

    </div>

  )
}

export default Playlist
