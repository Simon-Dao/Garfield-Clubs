//# id
//. class

var baseURL = 'http://localhost:8080/'

async function editStuff() {

    let name = 'Anime Club'

    let clubs = await axios.get(baseURL+'get-club/'+name)

    let clubName = document.querySelector('#club-names')
    clubName.innerHTML = clubs.data[0].name
}

editStuff()