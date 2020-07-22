import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import {formOpen, formClose, formOverlaysList, closeParentForm } from "./utils.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";

//to create instances of the enlarged image popup
const bigImagePopup = new PopupWithImage(".form_type_image");

//two instances of PopupWithForm
const profilePopupWithForm = new PopupWithForm(".form_type_edit-profile", function(array) {
  userName.textContent = array[0].value; // original code   userName.textContent = formName.value; 
  occupation.textContent = array[1].value; // original code   occupation.textContent = formOccupation.value;
});

const addCardPopupWithForm = new PopupWithForm(".form_type_add-card", function() {
  renderCard({name: addFormTitle.value, link: addFormUrl.value});
  addFormUrl.value = "";
  addFormTitle.value = "";
});


addCardPopupWithForm.setEventListeners();
profilePopupWithForm.setEventListeners();

const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name-profile");
const formOccupation = document.querySelector(".form__description-profile");

//new instances of Popus classes 
//const editProfilePopup = new Popup(".form_type_edit-profile");
//const addCardPopup = new Popup(".form_type_add-card");

const defaultConfig = {
  inputSelector: ".form__input", 
  submitButtonSelector: ".form__save-button", 
  inactiveButtonClass: "form__save-button_type_inactive", 
  inputErrorClass: "form__input_type_error", 
  errorClass: "form__input-error_active"
}

const editFormModalWindow = document.querySelector('.form_type_edit-profile');
const cardFormModalWindow = document.querySelector('.form_type_add-card');

const editProfileForm = editFormModalWindow.querySelector(".form__container");
const addCardForm = cardFormModalWindow.querySelector(".form__container");

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const form = document.querySelector(".form_type_edit-profile");
const addForm = document.querySelector(".form_type_add-card");
const imagePopup = document.querySelector(".form_type_image");

//these are needed for the cards
const addFormTitle = addForm.querySelector(".form__name-card");
const addFormUrl = addForm.querySelector(".form__description-card");

const editButton = document.querySelector(".profile__edit-button");
// moved to popup with form - possibly delete from here
//const saveButton = document.querySelector(".form__save-button");
//const closeButton = form.querySelector(".form__close-button");
//const addCardCloseButton = addForm.querySelector(".form__close-button");

//this impacts the cards
//const saveCardButton = addForm.querySelector(".form__save-button");
//const imageCloseButton = imagePopup.querySelector(".form__close-button");
const addButton = document.querySelector(".profile__add-button");

const list = document.querySelector(".elements");

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

console.log(initialCards);

//refactoring rendercard to be done by Section class  KEEP WORKING HERE
const cardList = new Section({
  items: initialCards, 
  renderer: (data) => {
  const cards = new Card(data, ".elements__template", function() {
  bigImagePopup.open(data);
  });
  const cardElement = cards.generateCard();
  cardList.addItem(cardElement);
}
  },
  ".elements");


cardList.renderItems();

function setOverlayListeners() {
  formOverlaysList.forEach((overlayElement) => {
   overlayElement.addEventListener("click", closeParentForm);
  }
)};

//button listeners start here

editButton.addEventListener("click", () => {
   profilePopupWithForm.open();
   setOverlayListeners();
})

addButton.addEventListener("click", (e) => {
   e.preventDefault();
   addCardPopupWithForm.open();
   setOverlayListeners();
})

// addCardCloseButton.addEventListener("click", (e) => {
//    e.preventDefault();
//    formClose(addForm);
// })

// imageCloseButton.addEventListener("click", (e) => {
//    e.preventDefault();
//    formClose(imagePopup);
// });

export { list };