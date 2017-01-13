import React from 'react'
import { Link } from 'react-router'

const SavedPlaylists = (props) => {

  const savedPlaylists = props.savedPlaylists.map((vid) => { 
    const playlistTitle = (vid.playlistTitle).replace(/ /g,'-')
    return <Link to={{ pathname: `breaks/${playlistTitle}`, state: vid }} key={vid.key}>
    <li>
      <h6>{vid.playlistTitle}:</h6>
        {vid.videoPosters.map(poster => { return <div key={poster}><img src={poster} alt="video" /><br/></div> })}
    </li></Link> })
  
  return (
    <ul>
      <h3>saved playlists</h3>
      {savedPlaylists}
    </ul>
  )
}

export default SavedPlaylists
