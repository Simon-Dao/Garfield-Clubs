var baseURL = 'http://localhost:8080/'

const createList = async () => {
    //let message = await axios.get('http://localhost:8080')

    let clubs = await axios.get(baseURL+'testing')

    console.log(clubs)
}

const createClubCard = () => {
    //create card
}

createList()