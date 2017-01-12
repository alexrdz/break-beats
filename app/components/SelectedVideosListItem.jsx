import React from 'react'

const SelectedVideosListItem = ({selectedVideo, indexo, selectedVideosTitles, selectedVideosPosters, onItemClick}) => {
  return (
    <li 
      className="Selected-videos-list__item" 
      onClick={() => { onItemClick(selectedVideo, selectedVideosTitles[indexo], selectedVideosPosters[indexo]) }} 
      key={selectedVideo}>
      
      {selectedVideosTitles[indexo]}
    
    </li>
  )
}

export default SelectedVideosListItem
