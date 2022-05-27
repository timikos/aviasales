import axios from 'axios'

export default function SearchIdSession() {
  axios.get('https://aviasales-test-api.kata.academy/search')
    .then(response => {
      console.log(response.data)
    })
    .catch(e => e)
}
