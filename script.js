const form = document.querySelector(".form_type_edit-profile");
const addForm = document.querySelector(".form_type_add-card");
const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name");
const formOccupation = document.querySelector(".form__description");

const addFormTitle = addForm.querySelector(".form__name");
const addFormUrl = addForm.querySelector(".form__description");

const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".form__save-button");
const closeButton = form.querySelector(".form__close-button");
const addCardCloseButton = addForm.querySelector(".form__close-button");
const createCardButton = addForm.querySelector(".form__save-button");
const addButton = document.querySelector(".profile__add-button");



function formToggle(modal) {
   modal.classList.toggle('form'); 
}

function formSave(event){
    event.preventDefault();
    userName.textContent = formName.value; 
    occupation.textContent = formOccupation.value; 

   formToggle(form);
}

saveButton.addEventListener("click", formToggle(form));
closeButton.addEventListener("click", formToggle(form));

editButton.addEventListener("click", () => {
   formToggle(form);})
addButton.addEventListener("click", () => {
   formToggle(addForm);})

addCardCloseButton.addEventListener("click", () => {
   formToggle(addForm);})

createCardButton.addEventListener("click", (data) => {
   const cardTemplate = document.querySelector(".elements__template").content.querySelector(".elements__element");
   const cardElement = cardTemplate.cloneNode(true);
   
   const cardImage = cardElement.querySelector(".elements__image");
   const cardTitle = cardElement.querySelector(".elements__name");
   const cardLikeButton = cardElement.querySelector(".elements__heart-icon");
   const cardRemoveButton = cardElement.querySelector(".elements__trash-icon");

   cardTitle.textContent = addFormTitle.value;
   cardImage.style.backgroundImage = `url(${addFormUrl.value})`;

   const list = document.querySelector(".elements");
   list.prepend(cardElement);
});

const initialCards = [
   {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
   {
       name: "Lake Louise",
       link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
   },
   {
       name: "Bald Mountains",
       link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
   },
   {
       name: "Latemar",
       link: "https://code.s3.yandex.net/web-code/latemar.jpg"
   },
   {
       name: "Vanois National Park",
       link: "https://code.s3.yandex.net/web-code/vanois.jpg"
   },
   {
       name: "Lago di Braies",
       link: "https://code.s3.yandex.net/web-code/lago.jpg"
   }
];


initialCards.forEach((data) => {
   const cardTemplate = document.querySelector(".elements__template").content.querySelector(".elements__element");
   const cardElement = cardTemplate.cloneNode(true);
   
   const cardImage = cardElement.querySelector(".elements__image");
   const cardTitle = cardElement.querySelector(".elements__name");
   const cardLikeButton = cardElement.querySelector(".elements__heart-icon");
   const cardRemoveButton = cardElement.querySelector(".elements__trash-icon");

   cardTitle.textContent = data.name;
   cardImage.style.backgroundImage = `url(${data.link})`;


   const list = document.querySelector(".elements");
   list.prepend(cardElement);
});
