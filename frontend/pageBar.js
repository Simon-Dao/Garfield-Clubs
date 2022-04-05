let pageIndex = 1
const cardsPerPage = 3

let start = 1
let size = 3

const pageBar = document.querySelector('#pageBar')

function left() {

    if(start == 1) return

    pageIndex--
    start--

    generate()
    filterClubs()
}

function right() {
    pageIndex++
    start++

    generate()
    filterClubs()
}

function setPageIndex(i) {
    console.log(i)
    pageIndex = i
    filterClubs()
}

//this method should have a better name. 
function generate() {
    
    pageBar.innerHTML = ""

    let tempNode = document.createElement('div')
    tempNode.innerHTML = `<a href="#" class="w3-bar-item w3-button w3-hover-black">«</a>`
    tempNode.onclick = left

    pageBar.appendChild(tempNode)

    for(let i = start; i < start + size; i++) {
        tempNode = document.createElement('div')
        tempNode.innerHTML = `<a href="#" class="w3-bar-item w3-button w3-hover-black">${i}</a>`
        tempNode.onclick = () => setPageIndex(i)
        pageBar.appendChild(tempNode)
    }
    tempNode = document.createElement('div')
    tempNode.innerHTML = `<a href="#" onClick="right" class="w3-bar-item w3-button w3-hover-black">»</a>`
    tempNode.onclick = right

    pageBar.appendChild(tempNode)

    pageBar.className = 'w3-bar d-flex w3-center centerized'
}

function setAsSelected() {
    
}

generate()