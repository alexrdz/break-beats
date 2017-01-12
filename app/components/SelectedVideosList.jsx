import React from 'react'
import SelectedVideosListItem from './SelectedVideosListItem'
import SaveForm from './SaveForm'

const SelectedVideosList = ({selectedVideos, selectedVideosTitles, selectedVideosPosters, onItemClick, savePlaylist}) => {
  return (
    <div>
      <ul className="Selected-videos-list">
        {selectedVideos.map(selectedVideo => 
          <SelectedVideosListItem 
            onItemClick={onItemClick} 
            selectedVideo={selectedVideo} 
            indexo={selectedVideos.indexOf(selectedVideo)}
            selectedVideosTitles={selectedVideosTitles}
            selectedVideosPosters={selectedVideosPosters} />)}
      </ul>
      {selectedVideos.length === 3 ? <SaveForm savePlaylist={savePlaylist} videos={selectedVideos} /> : ''}
    </div>
  )
}

export default SelectedVideosList
