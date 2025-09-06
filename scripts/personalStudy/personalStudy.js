import { reloadPage, loadTopicCheckeds } from "./loadContent.js"
import { createStudy, saveTopic } from "./update.js"
import { newFolderStudy, ulStudies, buttonNewTopic } from "./init.js"



// new study
newFolderStudy.addEventListener('click', ()=>{
    try{
        let nameStudy = prompt('Enter name study: ')
        createStudy(nameStudy)
    }catch {
        alert('Cancel')
    }
})

// show topics
ulStudies.addEventListener('click', (event)=>{
    showTopic(event)
})

// new topic
buttonNewTopic.addEventListener('click', (event)=>{
    try{
        let nameNewTopic = prompt('Enter name topic: ')
        let nameStudy = event.target.getAttribute('name')
        newTopic(nameNewTopic, nameStudy)
    }catch{
        alert('Cancel')
    }
})


reloadPage()
saveTopic()
loadTopicCheckeds()