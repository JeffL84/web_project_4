import Card from "./components/card.js";
import FormValidator from "./components/FormValidator.js";
import { setOverlayListeners } from "./utils/utils.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import { formName, list, formOccupation, defaultConfig, addFormTitle, addFormUrl, editButton, addButton, initialCards, editProfileForm, addCardForm } from "./utils/constants.js";
import "./pages/index.css";
import Api from "./components/Api.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-3", //changed 42 to 3
  headers: {
    authorization: "69eeb443-3163-42be-a4f6-357544c2977b", //used "token" from slack
    "Content-Type": "application/json"
  }
});

api.getCardList()
.then(res => {
  const cardList = new Section({
    items: res, 
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
});

//to create instances of the enlarged image popup
const bigImagePopup = new PopupWithImage(".form_type_image");

//two instances of PopupWithForm
const profilePopupWithForm = new PopupWithForm(".form_type_edit-profile", function() {
  const profileInfo = new UserInfo(".profile__name", ".profile__description");
  profileInfo.setUserInfo([formName.value, formOccupation.value]);
  //next lines moved into SetUserInfo
  //userName.textContent = array[0].value; // original code   userName.textContent = formName.value; 
  //occupation.textContent = array[1].value; // original code   occupation.textContent = formOccupation.value;
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
