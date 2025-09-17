
const imageUpload = document.getElementById("imageUpload");
const profilePic = document.getElementById("profilePic");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

const originalValues = {};


function enableEdit(field) {
  const textEl = document.getElementById(field + "Text");
  const inputEl = document.getElementById(field + "Input");
  const parent = textEl.parentElement;

  const setBtn = parent.querySelector(".set-btn");
  const editBtn = parent.querySelector(".edit-btn");
  let cancelBtn = parent.querySelector(".cancel-btn");


  originalValues[field] = inputEl.value;


  if (!cancelBtn) {
    cancelBtn = document.createElement("button");
    cancelBtn.textContent = "❌";
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.onclick = () => cancelEdit(field);
    parent.querySelector(".btn-group").appendChild(cancelBtn);
  }

  
  textEl.style.display = "none";
  inputEl.style.display = "inline-block";
  setBtn.style.display = "inline-block";
  editBtn.style.display = "none";
  cancelBtn.style.display = "inline-block";

  inputEl.focus();
}


function setField(field) {
  const textEl = document.getElementById(field + "Text");
  const inputEl = document.getElementById(field + "Input");
  const parent = textEl.parentElement;

  const setBtn = parent.querySelector(".set-btn");
  const editBtn = parent.querySelector(".edit-btn");
  const cancelBtn = parent.querySelector(".cancel-btn");

  textEl.textContent = inputEl.value;

 
  textEl.style.display = "inline-block";
  inputEl.style.display = "none";
  setBtn.style.display = "none";
  editBtn.style.display = "inline-block";
  if (cancelBtn) cancelBtn.style.display = "none";
}


function cancelEdit(field) {
  const textEl = document.getElementById(field + "Text");
  const inputEl = document.getElementById(field + "Input");
  const parent = textEl.parentElement;

  const setBtn = parent.querySelector(".set-btn");
  const editBtn = parent.querySelector(".edit-btn");
  const cancelBtn = parent.querySelector(".cancel-btn");

 
  inputEl.value = originalValues[field];
  textEl.style.display = "inline-block";
  inputEl.style.display = "none";
  setBtn.style.display = "none";
  editBtn.style.display = "inline-block";
  if (cancelBtn) cancelBtn.style.display = "none";
}
