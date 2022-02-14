var baseURL = 'http://localhost:8080/'

const createList = async () => {
    //let message = await axios.get('http://localhost:8080')

    let clubs = await axios.get(baseURL+'club-list')

    console.log(clubs)

    clubs.forEach(() => {
        createClubCard()
    })
}

const createClubCard = () => {
    //create card
}

createList()