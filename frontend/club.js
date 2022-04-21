//# id
//. class

var baseURL = 'http://localhost:8080/'

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

function getTimesString(times) {

    let result = ''

    console.log(times)

    for(var day in times) {
        result += "</br>"+day+': '+times[day]
    }
    return result
}

async function editDescription() {
    let name = getCookie("club");
    
    let clubs = await axios.get(baseURL + 'get-club/' + name)
    
    let clubName = document.querySelector('#club-names')
    clubName.innerHTML = clubs.data[0].name
    console.log(clubName.innerHTML)

    let clubRoom = document.querySelector('#club-room')
    clubRoom.innerHTML = "Room: " + clubs.data[0].room

    //let clubLocation = document.querySelector('#location')
    //clubLocation.innerHTML = "Where: Room " + clubs.data[0].room + ", " + clubs.data[0].advisor

    let clubTime = document.querySelector('#time')
    clubTime.innerHTML = "Meeting times: </br>" + getTimesString(clubs.data[0].times)

    let clubDescription = document.querySelector('#description')
    clubDescription.innerHTML = clubs.data[0].description

    let clubMission = document.querySelector('#mission')
    clubMission.innerHTML = clubs.data[0].mission

    let clubInstagram = document.querySelector('#instagram')
    clubInstagram.innerHTML = "Instagram: " + clubs.data[0].instagram 

    let clubEmail = document.querySelector('#email')
    clubEmail.innerHTML = "Email: " + clubs.data[0].email

}

editDescription()