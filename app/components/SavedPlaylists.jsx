import React from 'react'
import { Link } from 'react-router'

const SavedPlaylists = (props) => {

  const savedPlaylists = props.savedPlaylists.map((vid) => { 
    const playlistTitle = (vid.playlistTitle).replace(/ /g,'-')
    return <Link to={{ pathname: `break-time/${playlistTitle}`, state: vid }} className="Playlist Cell six" key={vid.key} data-aos="fade-up">
    <li className="Playlist__item">
      <img src={vid.videoPosters[0]} alt="video" className="Playlist__poster" key={vid.videoPosters[0]} />
      {<h4 className="Playlist__title">{vid.playlistTitle}</h4>}
    </li>
    {/*<li className="Playlist">
        {vid.videoPosters.map(poster => { return <img src={poster} alt="video" className="Playlist__poster" key={poster} data-aos="fade-up" /> })}
    </li>*/}</Link> })
  return (
    <div>
    <h3>saved playlists</h3>
    <ul className="Grid -middle">
      {savedPlaylists}
    </ul>
      
    </div>
  )
}

export default SavedPlaylists
