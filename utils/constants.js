const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");


const defaultConfig = {
  inputSelector: ".form__input", 
  submitButtonSelector: ".form__save-button", 
  inactiveButtonClass: "form__save-button_type_inactive", 
  inputErrorClass: "form__input_type_error", 
  errorClass: "form__input-error_active"
}

//const formName = document.querySelector(".form__name-profile");
//const formOccupation = document.querySelector(".form__description-profile");

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



const editFormModalWindow = document.querySelector('.form_type_edit-profile');
const cardFormModalWindow = document.querySelector('.form_type_add-card');

const editProfileForm = editFormModalWindow.querySelector(".form__container");
const addCardForm = cardFormModalWindow.querySelector(".form__container");


export {userName, list, occupation, defaultConfig, addForm, addFormTitle, addFormUrl, editButton, addButton, initialCards, editProfileForm, addCardForm };