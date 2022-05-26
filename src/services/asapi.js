export default function AsapiService(searchId) {
  // const searchId = SearchIdSession()
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then(response => {
      return response
    })
    .catch((e) => e)
}
