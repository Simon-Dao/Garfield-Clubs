var baseURL = 'http://localhost:8080/'
var searchBar = document.querySelector('.search-bar')
let container = document.querySelector("#page-container")


var clubs = {}

const createList = async (clubs) => {
    
    container.innerHTML = ""
    
    clubs.forEach((club, index) => {
        
        let cardHTML = '<div class="w3-row-padding">'+
        '<div style="width: 300px" class="w3-margin-bottom">'+
        '<a href="description.html" style="text-decoration: none;" onClick="setCookie(\'club\',\''+club.name+'\')">' +
            '<div class="w3-container w3-white">'+
            `    <p><b>${club.name}</b></p>`+
           '     <p>Learn about environmental issues and sustainability, get volunteer hours, participate in'+
           '          resoration events and hikes. Fun activities and doughnuts!</p>'+
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

    let queryString = searchBar.value + key

    let clubs = await axios.get(baseURL+'get-clubs/'+queryString)  

    clubs = clubs.data.slice(pageIndex*cardsPerPage - cardsPerPage, pageIndex* cardsPerPage)
    console.log(clubs)

    createList(clubs)
}

searchBar.onkeypress = async (e) => {
    
    console.log(e)
    
    filterClubs(e)
} 

searchBar.onkeydown = function() {
    const key = event.key;
    if (key === "Backspace") {
      filterClubs(event, true)
    }
  };

filterClubs()