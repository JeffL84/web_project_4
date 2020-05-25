
let formName = document.querySelector(".form__name").nodeValue;
console.log(formName);

let form = document.querySelector(".form");

let userName = document.querySelector(".info__name").innerHTML;
let occupation = document.querySelector(".info__description").innerHTML;

let editButton = document.querySelector(".info__edit-button");
let saveButton = document.querySelector(".form__save-button");
let closeButton = document.querySelector(".form__close-button");


closeButton.addEventListener("click", formHide());
editButton.addEventListener("click", formShow());

console.log(editButton);

function formShow() {
    form.style.display = flex);
}

function formHide() {
    form.setAttribute("display", "none");
}


// saveButton.addEventListener("click", NEED FUNCTION );