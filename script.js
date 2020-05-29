const form = document.querySelector(".form");
const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name");
const formOccupation = document.querySelector(".form__description");
const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".form__save-button");
const closeButton = document.querySelector(".form__close-button");


function formToggle() {
   form.classList.toggle('form'); 
}

function formSave(event){
    event.preventDefault();
    userName.textContent = formName.value; 
    occupation.textContent = formOccupation.value; 

   formToggle();
}

saveButton.addEventListener("click", formToggle);
closeButton.addEventListener("click", formToggle);
editButton.addEventListener("click", formToggle);

