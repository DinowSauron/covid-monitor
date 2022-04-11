const path = "https://coronavirus-19-api.herokuapp.com/countries"

const headers = {
  method: "GET"
}

function getCountry(country: string) {
  return fetch(`${path}/${country}`, headers).then(res => res.json())
}

export default {getCountry}