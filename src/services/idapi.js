export default function SearchIdSession() {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
    .catch(err => err)
}
