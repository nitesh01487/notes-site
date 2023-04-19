console.log('Welcome to the web devlopment:');

showNotes();

// the textarea of notes content : id = addTxt; class = form-control mr-sm-2 mx-2 my-2

// the textarea of title content : id = addTitle; class = form-control mr-sm-2 mx-2 my-2

// the button has : class="btn btn-primary" id = "addBtn"

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){

    // for content
    let addTxt = document.getElementById("addTxt");
    // textarea of id addTxt is grabed;
    let notes = localStorage.getItem("notes");
    // localStorage is grabed
    if(notes == null)
    {
        notesObj= [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";


    // for title
    let addTitle = document.getElementById("addTitle");
    // textarea of id title is grabed
    let title = localStorage.getItem("title");
    // localStorage is grabed
    if(title == null)
    {
        titleObj= [];
    }
    else{
        titleObj = JSON.parse(title);
    }
    titleObj.push(addTitle.value);
    localStorage.setItem("title",JSON.stringify(titleObj));
    addTitle.value = "";
    showNotes();
});
 
function showNotes()
{
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    // for notes content
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    // for title
    if(title == null)
    {
       var titleObj= [];
    }
    else{
        titleObj = JSON.parse(title);
    }
    let html = "";
    let i =0;
    notesObj.forEach(function(element,index){
        html += `
            <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" display="inline">${index +1} :   ${titleObj[i++]}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
                </div>
            </div> 
        `;
        // In html button content the event listner is there which on clicking on the delete on the deleting notes, it deletes the note card;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0)
    {
        notesElm.innerHTML =html;
    }
    else{
        notesElm.innerHTML = `Nothing to show ! Use "Add a Note" section above to add notes `;
    }
}

// function to delete a note


function deleteNote(index){
    
    let notes = localStorage.getItem("notes");
    // for notes
    if(notes == null)
    {
        notesObj= [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));


    let title = localStorage.getItem("title");
    // for titles
    if( title== null)
    {
        titleObj= [];
    }
    else{
        titleObj = JSON.parse(title);
    }
    titleObj.splice(index,1);
    localStorage.setItem("title",JSON.stringify(titleObj));
    showNotes();
}

let search = document.getElementById('searchTxt');

search.addEventListener("input",function(e){
    // The oninput event occurs when an element gets user input. This event occurs when the value of an <input> or <textarea> element is changed.
    // So, whenever we change the value in the input tag it checks all the card and update it;
    // i.e, it traverse through each card;
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
});

// Further for practice:
// 1. Add Title
// 2. Mark a note as important
// 3. Sperate for users
// 4. Sync and host to web server


// --------------------1. Add Title----------------------
// the above code has modified in oreder to add the title
// ------------------------------------------------------


