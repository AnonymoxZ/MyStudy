import { studys, topicStudies} from "./modules/topics.js"
import { titleCase } from "./modules/tools.js"




// load list studies
const ulListStudies = document.querySelector('#list-studies')
let liStudies = document.querySelectorAll('#list-studies > li')
liStudies = [...liStudies]
for(let i=0;i<studys.length;i++){
    let subject = document.createElement('li')
    subject.setAttribute('class', 'content-item')
    subject.setAttribute('onclick', 'showTopic(event)')
    subject.innerText = titleCase(`${studys[i]}`)
    ulListStudies.appendChild(subject)
}


// this function select subjects links and show in subjects section
window.showTopic = (event)=>{
    const titleSubject = document.querySelector('#title-subject')
    const listTopics = document.querySelector('#list-topics')
    let contentText = event.target.innerText
    titleSubject.innerText = titleCase(contentText)
    listTopics.innerHTML = ``
    let title = contentText.toString().toLowerCase()
    topicStudies[title].forEach((e)=>{
        listTopics.innerHTML += `<li class="topic">${e} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${e}"></li>`
    })
}


// Function to save checkboxes checked [ localStorage ]
window.saveTopic = (event)=>{
    let cont = localStorage.length
    let topic = event.target.name
    let checkbox = event.target.checked
    
    if(localStorage.length == 0){
        localStorage.setItem(0, topic)
        cont++
    }else{
        if(!checkbox){
            for(let i=0;i<=localStorage.length;i++){
                let keyItem = localStorage.key(i)
                let valueItem = localStorage.getItem(keyItem)
                if(topic == valueItem){
                    localStorage.removeItem(keyItem)
                }
            }
        }else if(checkbox){
            localStorage.setItem(cont, topic)
            cont++
        }
    }
}


// Function to verify checkbox marked
ulListStudies.addEventListener('click', ()=>{
    let checkboxArr = document.querySelectorAll('input[type="checkbox"]')
    checkboxArr = [...checkboxArr]
    let dataLocalStorageArr = []
    for(let i=0;i<localStorage.length;i++){
        let keyData = localStorage.key(i)
        dataLocalStorageArr.push(localStorage.getItem(keyData))
    }
    checkboxArr.forEach((e)=>{
        /* The loop search all identifier name includes in localStorage */
        if(dataLocalStorageArr.includes(e.name)){
            e.setAttribute('checked', '')
        }
    })
})