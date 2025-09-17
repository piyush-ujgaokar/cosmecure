// Image Upload
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

// Enable edit mode
function enableEdit(field) {
  const textEl = document.getElementById(field + "Text");
  const inputEl = document.getElementById(field + "Input");
  const setBtn = textEl.parentElement.querySelector(".set-btn");
  const editBtn = textEl.parentElement.querySelector(".edit-btn");

  textEl.style.display = "none";
  inputEl.style.display = "inline-block";
  setBtn.style.display = "inline-block";
  editBtn.style.display = "none";
  inputEl.focus();
}

// Set/save field
function setField(field) {
  const textEl = document.getElementById(field + "Text");
  const inputEl = document.getElementById(field + "Input");
  const setBtn = textEl.parentElement.querySelector(".set-btn");
  const editBtn = textEl.parentElement.querySelector(".edit-btn");

  textEl.textContent = inputEl.value;
  textEl.style.display = "inline-block";
  inputEl.style.display = "none";
  setBtn.style.display = "none";
  editBtn.style.display = "inline-block";
}
