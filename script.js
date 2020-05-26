
let formName = document.querySelector(".form__name").value;
let formOccupation = document.querySelector(".form__description").value;

let form = document.querySelector(".form");

let userName = document.querySelector(".info__name");
let occupation = document.querySelector(".info__description");

let editButton = document.querySelector(".info__edit-button");
let saveButton = document.querySelector(".form__save-button");
let closeButton = document.querySelector(".form__close-button");


closeButton.addEventListener("click", formHide());
editButton.addEventListener("click", formShow());


function formShow() {
    form.setAttribute("style", "display: flex");
}

function formHide() {
    form.setAttribute("style", "display: none");
}

function formSave(){
   formName = document.querySelector(".form__name").value;
   formOccupation = document.querySelector(".form__description").value;
   userName.innerHTML = formName;
   occupation.innerHTML = formOccupation;

   formHide();
}
