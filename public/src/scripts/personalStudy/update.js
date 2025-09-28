import { titleCase, stringFormated, formatData } from "../modules/tools.js" // Caminho já está correto
import { ulStudies, listTopics, titleSubject, buttonNewTopic, buttonDeleteStudy } from "./init.js"



export function createStudy(n){
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

export function deleteStudy(event){
    let study = event.target.getAttribute('name')
    let valueSto = localStorage.getItem(study)
    if(confirm(`Delete "${study}"? `)){
        let strKey = JSON.parse(valueSto) ?? []
        strKey.forEach((e)=>{
        localStorage.removeItem(e.toString().toUpperCase())
        })
        localStorage.removeItem(study)
        titleSubject.innerText = 'Your subject here'
        listTopics.innerHTML = ``
        buttonNewTopic.setAttribute('disabled', '')
        buttonDeleteStudy.setAttribute('disabled', '')
    }
    window.location.reload(true) // POG :(
}

export function showTopic(event){
    try{
        let nameStudy = event.target.getAttribute('name')
        let keySto = localStorage.getItem(nameStudy)
        let arrStudy = JSON.parse(keySto)
        listTopics.innerHTML = ``
        if(arrStudy.length > 0 || nameStudy!==null){
            let titleStudy = event.target.innerText
            titleSubject.innerText = titleStudy
            buttonNewTopic.removeAttribute('disabled')
            arrStudy.forEach((e)=>{
            let nameKey = stringFormated(formatData(e))
            listTopics.innerHTML += `
                <li class="topic">
                    &nbsp
                    ${e}
                    <input type="checkbox" name="${nameKey}">
                    <button class='btn-delete-topic' name="${nameKey}">X</button>
                </li>`
            })
        }
        buttonNewTopic.setAttribute('name', nameStudy)
    }catch{
        console.log('Error in function ShowTopic() | Null select')
    }
}


export function newTopic(topic, nameStudy){
    if(stringFormated(topic).trim()===''){
        alert('Name invalid! Try again')
    }else{
        let nameTopic = titleCase(topic)
        let nameKey = stringFormated(formatData(topic))
        let liTopic = document.createElement('li')
        listTopics.innerHTML += `
            <li class="topic">
                &nbsp
                ${nameTopic} 
                <input type="checkbox" name="${nameKey}">
                <button class='btn-delete-topic' name="${nameKey}">X</button>
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


export function saveTopic(){
    window.addEventListener('click', ()=>{
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox=[...checkbox]
    checkbox.forEach((e)=>{
        e.addEventListener('click', (event)=>{
        if(e.checked){
            let nameTopic = event.target.getAttribute('name')
            let topicData = String(nameTopic.toUpperCase())
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


export function deleteTopic(nameStudy){
    let buttonDeleteTopic = document.querySelectorAll('.btn-delete-topic')
    let buttonsDelTopicArr = [...buttonDeleteTopic]
    let studyArr = JSON.parse(localStorage.getItem(nameStudy))
    buttonsDelTopicArr.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            let nameButton = btn.getAttribute('name')
            studyArr.splice(studyArr.indexOf(titleCase(nameButton)), 1)
            let arrayUpdt = JSON.stringify(studyArr)
            localStorage.setItem(nameStudy, arrayUpdt)
            localStorage.removeItem(nameButton)
            btn.parentElement.remove()
        })
    })
}
