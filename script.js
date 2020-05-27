let form = document.querySelector(".form");
let userName = document.querySelector(".info__name").innerHTML;
let occupation = document.querySelector(".info__description").innerHTML;
let formName = document.querySelector(".form__name");
let formOccupation = document.querySelector(".form__description");

let editButton = document.querySelector(".info__edit-button");
let saveButton = document.querySelector(".form__save-button");
let closeButton = document.querySelector(".form__close-button");


function formShow() {
    form.setAttribute("style", "display: flex");
}

function formHide() {
    form.setAttribute("style", "display: none");
}

function formSave(event){
    event.preventDefault();
    document.querySelector('.info__name').textContent = formName.value; 
    document.querySelector('.info__description').textContent = formOccupation.value; 

   formHide();
}

saveButton.addEventListener("click", formSave);
closeButton.addEventListener("click", formHide);
editButton.addEventListener("click", formShow);