import { loadContent } from "./loadContent.js"
import { createStudy, newTopic, showTopic, deleteStudy, deleteTopic } from "./update.js"
import { newFolderStudy, ulStudies, buttonNewTopic, buttonDeleteStudy } from "./init.js"



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
    let nameStudy = event.target.getAttribute('name')
    let nameNewTopic = prompt('Enter name topic: ')
    newTopic(nameNewTopic, nameStudy)
})

// delete study
ulStudies.addEventListener('click', (event)=>{
    try{
        let nameStudy = event.target.getAttribute('name')
        if(nameStudy!==null){
        buttonDeleteStudy.setAttribute('name', nameStudy)
        buttonDeleteStudy.removeAttribute('disabled')
        }
    }catch{
        console.log('Error')
    }
})
buttonDeleteStudy.addEventListener('click', (event)=>{
    deleteStudy(event)
})

// delete topic
ulStudies.addEventListener('click', (event)=>{
    let nameStudy = event.target.getAttribute('name')
    if(nameStudy!==null){
    deleteTopic(nameStudy)
    }
})


loadContent()