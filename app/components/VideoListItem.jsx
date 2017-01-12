import React from 'react'

const VideoListItem = ({video, onItemClick}) => {
  return (
    <li className="Video-list__item grid-flex-cell-1of2" onClick={() => { onItemClick(video) }} key={video.etag}>
      <h6 className="Video-list__title">{video.snippet.title}</h6>
      <img className="Video-list__image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
    </li>
  )
}

export default VideoListItem
