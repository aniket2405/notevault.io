const form = {};
form.noteText = document.querySelector("#formNoteText");
form.addButton = document.querySelector("#formAddButton");
form.color = document.querySelector("#formColor");

const notes = document.querySelector("#notes");

form.noteText.focus();

// Functions
function addNote() {
  let text = form.noteText.value;
  let note = document.createElement("div");
  let deleteButton = document.createElement("span");
  var editButton = document.createElement("button");

  note.classList.add("note");
  note.classList.add(form.color.value);
  note.innerHTML = `<p class='note-text'>${text}</p>`;
  deleteButton.classList.add("note-delete");
  editButton.classList.add("note-delete");
  deleteButton.innerHTML = "&times;";
  editButton.innerHTML = "Edit";
  editButton.id = "editId";
  note.appendChild(editButton);
  editButton.onclick = function () {
    editNote();
  };

  note.appendChild(deleteButton);
  notes.appendChild(note);

  form.noteText.value = "";
  form.noteText.focus();

  addListenerDeleteButton(deleteButton);
  console.log(note);
}

function editNote() {
  // console.log(document.activeElement);
  // console.log(document.activeElement.parentElement);
  document.activeElement.parentElement.childNodes[0].contentEditable = "true";
  document.getElementById("editId").innerHTML = "Save";
  document.getElementById("editId").onclick = function () {
    saveNote();
  };
}

function saveNote() {
  document.activeElement.parentElement.childNodes[0].contentEditable = "false";

  document.getElementById("editId").innerHTML = "Edit";
  //Recalling the Edit
  document.getElementById("editId").onclick = function () {
    editNote();
  };
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener("click", function (e) {
    e.stopPropagation();
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}

// Event Listeners
form.addButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (form.noteText.value != "") {
    addNote();
  }
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
