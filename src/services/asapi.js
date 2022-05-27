import axios from 'axios'

export default function AsapiService(searchId) {
  axios.get('https://aviasales-test-api.kata.academy/tickets', {
    perams: {
      searchId,
    }
  })
    .then(response => {
      response
    })
    .catch((e) => e)
}
