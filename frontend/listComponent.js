

var baseURL = 'http://localhost:8080/'

const createList = async () => {    
    
    let clubs = await axios.get(baseURL+'testing')
    
    const clubCard = 'hello this is html'
    let container = document.querySelector("#page-container")
    
    clubs.data.forEach((club, index) => {
        
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
        
        testhtml = "<h3>hello world</h3>"

        //make the element
        let clubHtml = document.createElement('div')
        clubHtml.innerHTML = cardHTML

        console.log(clubHtml.innerHTML)

        container.appendChild(clubHtml)
    });

    container.style = 'display: flex; flex-wrap: wrap;'
}

createList()