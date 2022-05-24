export default function AsapiService() {
  fetch('https://front-test.beta.aviasales.ru/search')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .catch((e) => e)
}
