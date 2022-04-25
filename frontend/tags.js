var tags = []
const allTags = ['social','competitive','community service', 'has food', 'stem','environmental','athletic','music','arts','cultural','business','social justice','games','boring']
const dropdown = document.querySelector('#tag-dropdown')

function createTags() {
    
    allTags.foreach((tag, index) => {
        let div = document.createElement('div')
        div.innerHTML = `<li><a class="dropdown-item" href="#">${tag}</a></li>`

        dropdown.appendChild(div)
    }) 

    
}

createTags()