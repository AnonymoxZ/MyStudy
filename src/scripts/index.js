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
    let topic = event.target.name;
    let checkbox = event.target.checked;
    let nameKey = 'topics-studies';

    let stoData = localStorage.getItem(nameKey);
    let arrKeys = JSON.parse(stoData) ?? [];
    if (checkbox) {
        // add
        if (!arrKeys.includes(topic)) {
            arrKeys.push(topic);
        }
    } else {
        // remove
        arrKeys = arrKeys.filter(t => t !== topic);
    }
    let studyStr = JSON.stringify(arrKeys);
    localStorage.setItem(nameKey, studyStr);
}


ulListStudies.addEventListener('click', ()=>{
    /**
     * Function to verify checkbox marked
    **/
    let topics = localStorage.getItem('topics-studies')
    let arrTopics = JSON.parse(topics) ?? []
    let checkboxArr = document.querySelectorAll('input[type="checkbox"]')
    checkboxArr = [...checkboxArr]
    let dataLocalStorageArr = []
    for(let i=0;i<arrTopics.length;i++){
        let keyData = arrTopics[i]
        dataLocalStorageArr.push(keyData)
    }
    checkboxArr.forEach((e)=>{
        /* The loop search all identifier name includes in localStorage */
        if(dataLocalStorageArr.includes(e.getAttribute('name'))){
            e.setAttribute('checked', '')
        }
    })
})