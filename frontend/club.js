//# id
//. class

var baseURL = 'http://localhost:8080/'

async function editDescription(){
    let name = 'Key Club'

    let clubs = await axios.get(baseURL+'get-club/'+name)

    let clubName = document.querySelector('#club-names')
    clubName.innerHTML = clubs.data[0].name

    let clubRoom = document.querySelector('#club-room')
    clubRoom.innerHTML = "Room " + clubs.data[0].room

    let clubLocation = document.querySelector('#location')
    clubLocation.innerHTML = "Where: Room " + clubs.data[0].room + ", " + clubs.data[0].advisor

    let clubTime = document.querySelector('#time')
    clubTime.innerHTML = "When: " + clubs.data[0].days + ", " + clubs.data[0].time
}

editDescription()
