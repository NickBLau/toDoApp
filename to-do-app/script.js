//DOM ELEMENTER

const addNewBtn = document.querySelector("#add-new-btn")
const addNewForm = document.querySelector("#add-new-form")
const ul = document.querySelector("#tasks")
const title = document.querySelector("#new-title")
const text = document.querySelector("#new-text")


window.addEventListener("load", loadStorage)

function loadStorage(){
    if (localStorage.getItem("theWholeShit")){
   let savedHTML = localStorage.getItem("theWholeShit")
   ul.innerHTML = savedHTML
    }

}

addNewBtn.addEventListener("click", function(){
    title.value = ""
    text.value = ""
    if(addNewForm.classList.contains("editing-active")){
        //Luk formen
        addNewForm.classList.remove("editing-active")
        this.innerHTML = "opret opgave"
    }
    else{
        //Åben formen
        addNewForm.classList.add("editing-active")
        this.innerHTML = "annullere"
    }

})



//addEntry
addNewForm.addEventListener("submit", function(event){
    event.preventDefault()
    let entry = '<li class="myTask">'
        entry += '<h2>'
        entry += title.value
        entry+= '</h2>'
    //  entry '<h2>' + title.value + '</h2>'
        entry += '<p>'
        entry += text.value
        entry += '</p>'
        entry += '<button onclick="deleteEntry(this.parentNode)"> <img src="img/trashcan.png" id="trash-btn"  alt="slet" srcset=""> </button>'
        entry += '<input type="radio" name="radioNumber.value" id="" onchange="markTask(this.parentNode,this)">Completed</input>'
        entry += '<input type="radio" name="radioNumber.value" id="" onchange="markTaskprogress(this.parentNode,this)">In progress</input>'
        entry += '<input type="radio" name="radioNumber.value" id="" onchange="markTaskfail(this.parentNode,this)">Failed</input>'
    entry += '</li>'

    
    ul.innerHTML += entry
    saveToStorage()
    addNewForm.classList.remove("editing-active")
    addNewBtn.innerHTML = "Opret opgave"
})


//delete entry

function deleteEntry(entry){
    entry.remove()
    saveToStorage()
}

//Mark entry

function markTask(entry, checkbox){
    if(checkbox.checked){
        checkbox.setAttribute("checked", "true")

        entry.classList.add("done")
        entry.classList.remove("notdone", "progress" )
    }
    else{
        checkbox.removeAttribute("checked")
        entry.classList.remove("done")
    }
    saveToStorage()
}

//mark Entryfailed
function markTaskfail(entry, checkbox){
    if(checkbox.checked){
        checkbox.setAttribute("checked", "true")

        entry.classList.add("notdone")
        entry.classList.remove("done", "progress")
    }
    else{
        checkbox.removeAttribute("checked")
        entry.classList.remove("notdone")
    }
    saveToStorage()
}

//mark EntryProgress
function markTaskprogress(entry, checkbox){
    if(checkbox.checked){
        checkbox.setAttribute("checked", "true")
        
        entry.classList.add("progress")
        entry.classList.remove("done", "notdone")
    }
    else{
        checkbox.removeAttribute("checked")
        entry.classList.remove("progress")
    }
    saveToStorage()
}

// function markTask(entry, checkbox){
//     // entry.classList.toggle("done")
//     if (checkbox.checked==true ){
//         checkbox.setAttribute("checked", "true")
//         entry.classList.remove("done")


//     }
//     else checkbox.setAttribute("checked", "false")
//     entry.classList.remove("done")
//     saveToStorage()

// }
// function markTask(entry){
//     if (entry.classList.contains("done")){
//     entry.classList.remove("done")

//     }
//     else{
//         entry.classList.add("done")

//     }
// }



//save

function saveToStorage(){
    localStorage.setItem("theWholeShit", ul.innerHTML)
}