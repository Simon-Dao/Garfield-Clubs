var tags = []
const allTags = ['social','competitive','community service', 'has food', 'stem','environmental','athletic','music','arts','cultural','business','social justice','games','boring']
const dropdown = document.querySelector('#tag-dropdown')
const tagContainer = document.querySelector('.tag-container')

function onClick(name) {
    if(!tags.includes(name))tags.push(name)  
    
    displaySelectedTags()

    filterClubs()
}

function createTags() {
    dropdown.innerHTML = ''

    allTags.forEach((tag, index) => {

        if(tags.includes(tag)) return

        let div = document.createElement('div')
        div.innerHTML = `<li><a class="dropdown-item ${tags.includes(tag) ? "selected" : ""}" onClick='onClick(this.innerHTML)' href="#">${tag}</a></li>`
        
        dropdown.appendChild(div)
    })     
}

function removeTag(tagToRemove) {

    let newTags = []

    for(let i = 0; i < tags.length; i++) 
    {
        if(tags[i] != tagToRemove) {
            newTags.push(tags[i])
        }
    }

    tags = newTags

    displaySelectedTags()

    filterClubs()
}

function displaySelectedTags() {

    tagContainer.innerHTML = ''

    tags.forEach((tagName, index)=> {
        let newTag = document.createElement('div')

        newTag.innerHTML = `<div class="tag-body d-flex"><div>${tagName}</div></div>`
        newTag.addEventListener('click', () => {
            removeTag(tagName)
        })

        tagContainer.appendChild(newTag)
    })
    
}

createTags()