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
   console.log(cardTemplate);
   const cardElement = cardTemplate.cloneNode(true);
   
   const cardImage = cardElement.querySelector(".elements__image");
   console.log(cardImage);
   const cardTitle = cardElement.querySelector(".elements__name");
   console.log(cardTitle);
   const cardLikeButton = cardElement.querySelector(".elements__heart-icon");
   const cardRemoveButton = cardElement.querySelector(".elements__trash-icon");

   cardTitle.textContent = data.name;
   cardImage.style.backgroundImage = `url(${data.link})`;

   //add event listeners

   const list = document.querySelector(".elements");
   list.prepend(cardElement);
});
