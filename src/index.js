import Card from "./components/card.js";
import FormValidator from "./components/FormValidator.js";
import { setOverlayListeners, formOpen } from "./utils/utils.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import { avatarPhoto, MYID, formName, list, formOccupation, defaultConfig, addFormTitle, addFormUrl, editButton, addButton, initialCards, editProfileForm, addCardForm } from "./utils/constants.js";
import "./pages/index.css";
import Api from "./components/Api.js";
import Popup from "./components/Popup.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-3", //changed 42 to 3
  headers: {
    authorization: "69eeb443-3163-42be-a4f6-357544c2977b", //used "token" from slack
    "Content-Type": "application/json"
  }
});

// api.getAppInfo()
// .then(res => {
//     const userId = res._id;
//     console.log(userId);
// })

const deleteForm = new PopupWithForm(".form_type_delete-card", () => {});
deleteForm.setEventListeners();

api.getCardList()
.then(res => {
  //console.log(res);
  const cardList = new Section({
    items: res, 
    renderer: (data) => {
      //console.log(data);
    const cards = new Card(data,
       ".elements__template",
       //handleCardClick
      () => {
    bigImagePopup.open(data);
    }, 
    //handleDeleteClick
     (cardID) => {
       deleteForm.setDeleteHandler( ()=> {
        api.removeCard(cardID);
        cards.deleteCard();
      })
       
    });
    const cardElement = cards.generateCard();
    cardList.addItem(cardElement);
  }
    },
    ".elements");
  
  cardList.renderItems();
});

api.getUserInfo()
.then(res => {
  const myProfileInfo = new UserInfo(".profile__name", ".profile__description", ".profile__avatar");
  // console.log(res);
  myProfileInfo.setUserInfo([res.name, res.job, res.avatar]);
});

//to create instances of the enlarged image popup
const bigImagePopup = new PopupWithImage(".form_type_image");


const profileInfo = new UserInfo(".profile__name", ".profile__description", ".profile__avatar");
//three instances of PopupWithForm
const profilePopupWithForm = new PopupWithForm(".form_type_edit-profile", function() {
  //const profileInfo = new UserInfo(".profile__name", ".profile__description", ".profile__avatar");
  profileInfo.setUserInfo([formName.value, formOccupation.value, avatarPhoto.src]);
  api.setUserInfo(profileInfo.getUserInfo());
});

const renderCard = (data) => {
  const cards = new Card(data, ".elements__template", function() {
    bigImagePopup.open(data);
    });
  list.prepend(cards.generateCard());
};

const changeAvatarPopup = new PopupWithForm(".form_type_change-avatar", function(data) {
  console.log(data.url);
  api.setUserAvatar(data.url)
  .then(res => {
    avatarPhoto.src = res.avatar;
    console.log(res);
    console.log(res.avatar);
    profileInfo.changeUserAvatar(res.avatar);
    
  });
});

changeAvatarPopup.setEventListeners();

const addCardPopupWithForm = new PopupWithForm(".form_type_add-card", function(data) {
  api.addCard(data)
  .then(data => {
    renderCard(data);
    addFormUrl.value = "";
    addFormTitle.value = "";
  })
});

addCardPopupWithForm.setEventListeners();
profilePopupWithForm.setEventListeners();

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

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

avatarPhoto.addEventListener("click", ()=> {
  changeAvatarPopup.open();
  setOverlayListeners();
})

