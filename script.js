let form = document.querySelector(".form");
//I am not sure I understood your feedback for line 1 - if it is not fixed yet, can you clarify? 
let userName = document.querySelector(".profile__name").innerHTML;
let occupation = document.querySelector(".profile__description").innerHTML;
let formName = document.querySelector(".form__name");
let formOccupation = document.querySelector(".form__description");
let editButton = document.querySelector(".profile__edit-button");
let saveButton = document.querySelector(".form__save-button");
let closeButton = document.querySelector(".form__close-button");


function formShow() {
   form.classList.toggle('form'); 
}

function formHide() {
    form.classList.toggle('form'); 
}

function formSave(event){
    event.preventDefault();
    document.querySelector('.profile__name').textContent = formName.value; 
    document.querySelector('.profile__description').textContent = formOccupation.value; 

   formHide();
}

saveButton.addEventListener("click", formSave);
closeButton.addEventListener("click", formHide);
editButton.addEventListener("click", formShow);