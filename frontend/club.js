//# id
//. class

var baseURL = 'http://localhost:8080/'

async function editStuff() {

    let clubs = await axios.get(baseURL+'testing')

    let clubName = document.querySelector('#club-names')
    clubName.innerHTML = clubs.data[0].name

}

editStuff()