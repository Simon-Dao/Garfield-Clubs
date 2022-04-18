var baseURL = 'http://localhost:8080/'
var searchBar = document.querySelector('.search-bar')
let container = document.querySelector("#page-container")

var clubs = {}

const editedClubBlurb = (blurb) => {
  let cutoff = 197;

  if(blurb.length > 97) return blurb.substring(100)

  return blurb
}

const createList = async (clubs) => {
    
    container.innerHTML = ""
    
    clubs.forEach((club, index) => {
        
        let cardHTML = '<div class="w3-row-padding">'+
        '<div style="width: 300px" class="w3-margin-bottom">'+
        '<a href="description.html" style="text-decoration: none;" onClick="setCookie(\'club\',\''+club.name+'\')">' +
            '<div class="w3-container w3-white card-custom">'+
            `    <p><b>${editedClubBlurb(club.name)}</b></p>`+
           `     <p><b>${club.blurb}</b></p>`+
         '   </div>'+
         '</a>'
        '</div>'
        
        //make the element
        let clubHtml = document.createElement('div')
        clubHtml.innerHTML = cardHTML

        container.appendChild(clubHtml)
    });

    container.style = 'display: flex; flex-wrap: wrap;'
}

async function filterClubs(e, backspace) {

    let key = typeof e !== "undefined"  ? e.key : "" 
    key = backspace ? "" : key

    //get list of clubs now
    searchBar = document.querySelector('.search-bar')
    let s = searchBar.value

    let searchValue = backspace ? s.substring(0,s.length-1) : s 
    let queryString = searchValue + key

    if(queryString.length === 0) queryString = " "

    let clubs = await axios.get(baseURL+'get-clubs/'+queryString)  

    const filter = (club) => {

      for(let tag in tags) {
        if(club.tags.includes(tag)) return true;
      }
      return false
    }

    //filtering with tags
    clubs.data.filter(club => filter(club))

    clubs = clubs.data.slice(pageIndex*cardsPerPage - cardsPerPage, pageIndex* cardsPerPage)

    createList(clubs)
}

searchBar.onkeypress = async (e) => {
    
    filterClubs(e)
} 

searchBar.onkeydown = function() {
    const key = event.key;
    if (key === "Backspace") {
      filterClubs(event, true)
    }
  };

filterClubs()