showNotes();
// if user adds a note , add it to the localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  console.log(notesObj);
  showNotes();
});

// Show notes on webapp
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `
             <div class="noteCard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.Id)" class="btn btn-primary">Delete Note</a>
                </div>
            </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else{
      notesElm.innerHTML=`<h3>Use "Add Note" button to add a note<h3>`
  }
}

function deleteNote(index) {
    console.log("i am deleting ",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById("searchtxt");
search.addEventListener("input",()=>{
    
    let inputVal=search.value;

    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach((element)=>{
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML.toLowerCase();
        if (cardTxt.includes(inputVal.toLowerCase())) {
          element.style.display = "block";
          
        } else {
          element.style.display = "none";
        }
    })


})