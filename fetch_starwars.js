// Fetch ship data with promises.
const getShipsAndLog = () => {
    const data = fetch('https://swapi.dev/api/starships')
    data.then(res => res.json())
    .then(data => {
        for (let ship of data.results) {
            console.log(ship['name'])
        }
    })
}


// Fetch ships data with async/await.
const getShipsAndLogAsyncAwait = async () => {
    const data = await fetch('https://swapi.dev/api/people')
    const json = await data.json()
    for (let ship of json.results) {
        console.log(ship['name'])
    }
}


// getShipsAndLog()







