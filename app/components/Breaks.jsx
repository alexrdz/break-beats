import React from 'react'

const Breaks = (props) => {
  console.log(props)
  let videos = props.location.state.videoIds.map(videoId => <iframe key={videoId} src={`https://www.youtube.com/embed/${videoId}`}></iframe>)

  return (
    <div>
       <h3>{props.location.state.playlistTitle}</h3>
      <ul>
        {videos}
      </ul>

    </div>
  )
}

export default Breaks
