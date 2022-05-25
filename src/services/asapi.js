export default function AsapiService(searchId) {
  // const searchId = SearchIdSession()
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .then(response => {
      console.log(response)
      return response
    })
    .catch((e) => e)
}
