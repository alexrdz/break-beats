import React from 'react'
import VideoListItem from './VideoListItem'
import SelectedVideosList from './SelectedVideosList'

const VideoList = ({videos, onItemClick, selectedVideos, selectedVideosTitles, selectedVideosPosters, savePlaylist}) => {
  return (
    <div>
      <SelectedVideosList 
        selectedVideos={selectedVideos} 
        selectedVideosTitles={selectedVideosTitles}
        selectedVideosPosters={selectedVideosPosters}
        onItemClick={onItemClick} 
        savePlaylist={savePlaylist} />

      <ul className="Video-list grid-flex-container">
        { videos.map(video => <VideoListItem video={video} onItemClick={onItemClick} />) }
      </ul>
    </div>
  )
}

export default VideoList
