import React from 'react'
import SelectedVideosListItem from './SelectedVideosListItem'

const SelectedVideosList = ({selectedVideos}) => {
  console.log(selectedVideos)
  return (
    <div>
      <ul className="Selected-videos-list">
        {selectedVideos.map(selectedVideo => <SelectedVideosListItem key={selectedVideo} selectedVideo={selectedVideo} />)}
      </ul>
    </div>
  )
}

export default SelectedVideosList
