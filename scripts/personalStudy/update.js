import { titleCase, stringFormated, formatData } from "../modules/tools.js"
import { ulStudies, listTopics, titleSubject, buttonNewTopic } from "./init.js"


function createStudy(n){
    if(stringFormated(n).trim()===''){
        alert('String void! Try again')
    }else{
        let nameStudy = titleCase(n)
        let nameKey = stringFormated(n.trim().toUpperCase().split(' ').join('_'))
        let liStudy = document.createElement('li')
        liStudy.setAttribute('class', 'study-li')
        liStudy.setAttribute('name', nameKey)
        liStudy.innerText = nameStudy
        ulStudies.appendChild(liStudy)
        // add in stoLoc
        let stoData = localStorage.getItem(nameKey)
        let jsonData = JSON.parse(stoData) ?? []
        let studyStr = JSON.stringify(jsonData)
        localStorage.setItem(nameKey, studyStr)
    }
}



function showTopic(event){
    buttonNewTopic.removeAttribute('disabled')
    let titleStudy = event.target.innerText
    let nameStudy = event.target.getAttribute('name')
    let keySto = localStorage.getItem(nameStudy)
    titleSubject.innerText = titleStudy
    let arrStudy = JSON.parse(keySto)
    listTopics.innerHTML = ``
    if(arrStudy.length > 0){
        arrStudy.forEach((e)=>{
        listTopics.innerHTML += `
            <li class="topic">
                &nbsp
                ${e}
                <input type="checkbox" name="${stringFormated(formatData(e))}">
            </li>`
        })
    }
    buttonNewTopic.setAttribute('name', nameStudy)
}


function newTopic(topic, nameStudy){
    if(stringFormated(topic).trim()===''){
        alert('Name invalid! Try again')
    }else{
        let nameTopic = titleCase(topic)
        let nameKey = stringFormated(formatData(topic))
        let liTopic = document.createElement('li')
        listTopics.innerHTML += `
            <li class="topic">${nameTopic} &nbsp 
                <input type="checkbox" name="${nameKey}">
            </li>`
        listTopics.appendChild(liTopic)

        // add in stoLoc  
        let valueSto = localStorage.getItem(nameStudy)
        let arrStudy = JSON.parse(valueSto)
        arrStudy.push(nameTopic)
        let strArr = JSON.stringify(arrStudy)
        localStorage.setItem(nameStudy, strArr)
    }
}


function saveTopic(){
    window.addEventListener('click', ()=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox=[...checkbox]
    checkbox.forEach((e)=>{
        e.addEventListener('click', (event)=>{
        if(e.checked){
            let nameTopic = event.target.getAttribute('name')
            let topicData = nameTopic
            localStorage.setItem(topicData, topicData)
        }else{
            let nameTopic = event.target.getAttribute('name')
            let topicData = String(nameTopic.toUpperCase())
            localStorage.removeItem(topicData)
        }
        })
    })
    })
}


export { createStudy, saveTopic }
