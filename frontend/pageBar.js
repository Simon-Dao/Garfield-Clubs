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
    
    pageBar.innerHTML = ""

    let tempNode = document.createElement('div')
    tempNode.innerHTML = `<a href="#" class="w3-bar-item w3-button w3-hover-black transition-swipe">«</a>`
    tempNode.onclick = left

    pageBar.appendChild(tempNode)

    tempNode = document.createElement('div')
    tempNode.innerHTML = `<a href="#" class="w3-bar-item w3-button w3-hover-black">${pageIndex}</a>`
    tempNode.onclick = () => setPageIndex(pageIndex)
    pageBar.appendChild(tempNode)

    tempNode = document.createElement('div')
    tempNode.innerHTML = `<a href="#" onClick="right" class="w3-bar-item w3-button w3-hover-black">»</a>`
    tempNode.onclick = right

    pageBar.appendChild(tempNode)

    pageBar.className = 'w3-bar d-flex w3-center centerized'
}

function setAsSelected() {

}

generate()