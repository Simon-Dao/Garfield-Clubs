var baseURL = 'http://localhost:8080/'

const createList = async () => {
    //let message = await axios.get('http://localhost:8080')

    const body = document.querySelector('body')

    let clubs = await axios.get(baseURL+'testing')

    clubs.forEach((club, index) => {
        //make the element
        let club = document.createElement('div')
        
        body.appendChild(club)
    });

}

createList()