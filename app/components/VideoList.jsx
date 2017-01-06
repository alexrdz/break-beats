import React from 'react'
import VideoListItem from './VideoListItem'
import SelectedVideosList from './SelectedVideosList'

const VideoList = ({videos, onItemClick, selectedVideos}) => {
  return (
    <div>
      <SelectedVideosList selectedVideos={selectedVideos} />

      <ul className="Video-list grid-flex-container">
        { videos.map(video => <VideoListItem key={video.etag} video={video} onItemClick={onItemClick} />) }
      </ul>
    </div>
  )
}

export default VideoList
