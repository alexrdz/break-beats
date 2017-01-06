import React from 'react'

const SelectedVideosListItem = ({selectedVideo, onItemClick}) => {
  return (
    <li className="Selected-videos-list__item" onClick={() => { onItemClick(selectedVideo) }}>
      {selectedVideo}
    </li>
  )
}

export default SelectedVideosListItem
