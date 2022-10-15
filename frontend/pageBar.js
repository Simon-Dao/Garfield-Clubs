let pageIndex = 1
const cardsPerPage = 6

const pageBar = document.querySelector('#pageBar')

function left() {

    if(pageIndex == 1) return

    pageIndex--

    generate()
    filterClubs()
}

function right() {

    if(pageIndex >= maxPages) return 
    pageIndex++
    generate()
    filterClubs()
}

function setPageIndex(i) {
    pageIndex = i
    filterClubs()
}

//this method should have a better name. 
function generate() {
    
    pageBar.innerHTML = `
        <div onClick='left()'>
            <a href="#" class="w3-bar-item w3-button w3-hover-black transition-swipe">«</a>
        </div>
        <div>
            <a href="#" class="w3-bar-item w3-button w3-hover-black">${pageIndex}</a>
        </div>
        <div onClick='right()'>
            <a href="#" onClick="right" class="w3-bar-item w3-button w3-hover-black">»</a>
        </div>
    `

    pageBar.className = 'w3-bar d-flex w3-center centerized'
}

function setAsSelected() {

}

generate()