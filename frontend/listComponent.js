var baseURL = 'http://localhost:8080/'

const createList = async () => {
    //let message = await axios.get('http://localhost:8080')

    let clubs = await axios.get(baseURL+'testing')

    console.log(clubs)

    clubs.forEach( (element, index) => {
        //make the element
        let = document.createElement('div')
    });

}

const createClubCard = () => {
    //create card

}

createList()