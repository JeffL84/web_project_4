import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import {formOpen, formClose, setOverlayListeners, formOverlaysList, closeParentForm } from "../utils/utils.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import { userName, list, occupation, defaultConfig, addForm, addFormTitle, addFormUrl, editButton, addButton, initialCards, editProfileForm, addCardForm } from "../utils/constants.js";

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

//new instances of Popus classes 
//const editProfilePopup = new Popup(".form_type_edit-profile");
//const addCardPopup = new Popup(".form_type_add-card");


const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const renderCard = (data) => {
  const cards = new Card(data, ".elements__template", function() {
    bigImagePopup.open(data);
    });
  list.prepend(cards.generateCard());
};

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

// function setOverlayListeners() {
//   formOverlaysList.forEach((overlayElement) => {
//    overlayElement.addEventListener("click", closeParentForm);
//   }
// )};

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
