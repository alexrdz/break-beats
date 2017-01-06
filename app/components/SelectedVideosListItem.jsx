import React from 'react'

const SelectedVideosListItem = ({selectedVideo}) => {
  return (
    <li className="Selected-videos-list__item">
      {selectedVideo}
    </li>
  )
}

export default SelectedVideosListItem
