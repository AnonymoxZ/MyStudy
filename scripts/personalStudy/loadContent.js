// reload visual page
import { ulStudies } from "./init.js"
import { titleCase } from "../modules/tools.js"


function reloadPage(){
    for(let i=0;i<localStorage.length;i++){
        let keyVal = localStorage.key(i)
        let valueSto = localStorage.getItem(keyVal)
        // verify obj and show topic
        if(valueSto[0] == '[' || valueSto[-1] == ']'){
            // show studies topics
            let keySto = localStorage.key(i)
            let valueSto = localStorage.getItem(keySto)
            
            let nameStudy = titleCase(keySto)
            let liStudy = document.createElement('li')
            liStudy.setAttribute('class', 'study-li')
            liStudy.setAttribute('name', keySto)
            liStudy.innerText = nameStudy
            ulStudies.appendChild(liStudy)
        }
    }
}


function loadTopicCheckeds(){
    ulStudies.addEventListener('click', ()=>{
    let checkboxArr = document.querySelectorAll('input[type="checkbox"]')
    checkboxArr = [...checkboxArr]
    let dataLocalStorageArr = []
    for(let i=0;i<localStorage.length;i++){
        let keyData = localStorage.key(i)
        dataLocalStorageArr.push(keyData)
    }
    checkboxArr.forEach((e)=>{
        if(dataLocalStorageArr.includes(e.getAttribute('name'))){
            e.setAttribute('checked', '')
        }
    })
})
}


export { reloadPage, loadTopicCheckeds }