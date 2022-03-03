//# id
//. class

var baseURL = 'http://localhost:8080/'

async function editName() {

    let name = 'Japanese Student Association'

    let clubs = await axios.get(baseURL+'get-club/'+name)

    let clubName = document.querySelector('#club-names')
    clubName.innerHTML = clubs.data[0].name
}

async function editRoom(){

    let name = 'Japanese Student Association'

    let clubs = await axios.get(baseURL+'get-club/'+name)

    let clubName = document.querySelector('#club-room')
    clubName.innerHTML = clubs.data[0].room
}

editName()
editRoom()