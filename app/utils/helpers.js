import axios from 'axios'

let maxResults = 12

export function GetSearchResults (searchTerm) {
  // apikey AIzaSyCBalkzqkDO1Tv6SAFYPmO_e1ipajJBwxE
  // return axios.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=dangerfield&key=AIzaSyCBalkzqkDO1Tv6SAFYPmO_e1ipajJBwxE')
  return axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&order=viewCount&q="' + searchTerm + '"&type=video&key=AIzaSyDIE0dd7hZ5j4vQRtwrU0CwQLGq-lhXWCc')
}
