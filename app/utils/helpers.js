import axios from 'axios'
import YT_KEY from './api-keys'

let maxResults = 12

export function GetSearchResults (searchTerm) {
  return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&order=viewCount&q="${searchTerm}"&type=video&key=${YT_KEY}`)
}
