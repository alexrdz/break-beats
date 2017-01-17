import React from 'react'

const Breaks = (props) => {
  console.log(props)
  let videos = props.location.state.videoIds.map(videoId => <li key={videoId} className="Break__video"><iframe src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0`}></iframe></li>)

  return (
    <div>
       <h3 className="text-center">{props.location.state.playlistTitle}</h3>
      <ul className="Break">
        {videos}
      </ul>

    </div>
  )
}

export default Breaks
