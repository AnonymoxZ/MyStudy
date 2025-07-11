// subjects arrays importeds
import { essay, languages, literatury,
         geograph, philosophy, history,
         sociology, biology, physical,
         chemistry, math, studys} 
from "./modules/topics.js";



// create function to select subjects links and show in subjects section
window.showTopic = (event)=>{
    const titleSubject = document.querySelector('#title-subject');
    const listTopics = document.querySelector('#list-topics'); // for set += <li>
    let contentText = event.target.innerText;
    titleSubject.innerText = contentText;
    listTopics.innerHTML = ``;
    
    switch (titleSubject.innerText){
        case ('Essay'):
        essay.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${essay[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${essay[i]}"></li>
        `;
        });
        break;
        case ('Portuguese'):
        languages.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${languages[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${languages[i]}"></li>
        `;
        });
        break;
        case ('Literatury'):
        literatury.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${literatury[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${literatury[i]}"></li>
        `;
        });
        break;
        case ('Geograph'):
        geograph.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${geograph[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${geograph[i]}"></li>
        `;
        });
        break;
        case ('Philosophy'):
        philosophy.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${philosophy[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${philosophy[i]}"></li>
        `;
        });
        break;
        case ('History'):
        history.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${history[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${history[i]}"></li>
        `;
        });
        break;
        case ('Sociology'):
        sociology.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${sociology[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${sociology[i]}"></li>
        `;
        });
        break;
        case ('Biology'):
        biology.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${biology[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${biology[i]}"></li>
        `;
        });
        break;
        case ('Physical'):
        physical.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${physical[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${physical[i]}"></li>
        `;
        });
        break;
        case ('Chemistry'):
        chemistry.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${chemistry[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${chemistry[i]}"></li>
        `;
        });
        break;
        case ('Math'):
        math.forEach((e,i)=>{
        listTopics.innerHTML += `
        <li class="topic">${math[i]} &nbsp <input type="checkbox" onchange="saveTopic(event)" name="${math[i]}"></li>
        `;
        });
        break;
        default:
        alert('Oxe kkk??');
    }      
}

const ulListStudies = document.querySelector('#list-studies');
let liStudies = document.querySelectorAll('#list-studies > li');
liStudies = [...liStudies]
for(let i=0;i<studys.length;i++){
    let subject = document.createElement('li');
    subject.setAttribute('class', 'content-item');
    subject.setAttribute('onclick', 'showTopic(event)');
    subject.innerText = `${studys[i]}`;
    ulListStudies.appendChild(subject);
}


// Function to save checkboxes checked [ localStorage ]
window.saveTopic = (event)=>{
    let cont = localStorage.length;
    let topic = event.target.name;
    let checkbox = event.target.checked;
    
    if(localStorage.length == 0){
        localStorage.setItem(0, topic);
        cont++;
    }else{
        if(!checkbox){
            for(let i=0;i<=localStorage.length;i++){
                let keyItem = localStorage.key(i);
                let valueItem = localStorage.getItem(keyItem);
                if(topic == valueItem){
                    localStorage.removeItem(keyItem);
                }
            }
        }else if(checkbox){
            localStorage.setItem(cont, topic);
            cont++;
        }
    }
}


// Function to verify checkbox marked
ulListStudies.addEventListener('click', ()=>{
    let checkboxArr = document.querySelectorAll('input[type="checkbox"]');
    checkboxArr = [...checkboxArr];
    let dataLocalStorageArr = [];
    for(let i=0;i<localStorage.length;i++){
        let keyData = localStorage.key(i);
        dataLocalStorageArr.push(localStorage.getItem(keyData));
    }
    // save checkbox checked
    checkboxArr.forEach((e)=>{
        if(dataLocalStorageArr.includes(e.name)){
            e.setAttribute('checked', '');
        };
    });
});