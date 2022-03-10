//# id
//. class

var baseURL = 'http://localhost:8080/'


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
     for(let i = 0; i < ca.length; i++) {
         let c = ca[i];
     while (c.charAt(0) == ' ') {
        c = c.substring(1);
}
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
}
    return "";
}
async function editDescription(){
    let name = getCookie("club");

    console.log(name)

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
