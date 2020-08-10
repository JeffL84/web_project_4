import Card from "./components/card.js";
import FormValidator from "./components/FormValidator.js";
import { setOverlayListeners } from "./utils/utils.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import { avatarPhoto, MYID, formName, list, formOccupation, defaultConfig, addFormTitle, addFormUrl, editButton, addButton, editProfileForm, addCardForm } from "./utils/constants.js";
import "./pages/index.css";
import Api from "./components/Api.js";

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
.then(result => {
  const cardList = new Section({
    items: result, 
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
    }, 
    //handleLikeClick
    (cardID) => {
      if(cards.alreadyLiked() === false) {
        api.changeLikeCardStatus(cardID, true)
        .then(res => {
          const likeCount = res.likes.length;
          cards.like(likeCount);
        })
      }
      else {
        api.changeLikeCardStatus(cardID, false) 
          .then(res => {
            const likeCount = res.likes.length;
            cards.dislike(likeCount);
          })
      }
    }, 
    //handleLikeIcon
    ()=> {
      if(data.likes.length > 0) {
        data.likes.forEach(like => {
          if(like._id === MYID) {
            cards.alreadyLiked();
          }
        })
      }
    }
    );
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
const profilePopupWithForm = new PopupWithForm(".form_type_edit-profile", () => {
  //const profileInfo = new UserInfo(".profile__name", ".profile__description", ".profile__avatar");
  profileInfo.setUserInfo([formName.value, formOccupation.value, avatarPhoto.src]);
  api.setUserInfo(profileInfo.getUserInfo());
});

const renderCard = (data) => {
  const cards = new Card(data, ".elements__template", () => {
    bigImagePopup.open(data);
    });
  list.prepend(cards.generateCard());
};

const changeAvatarPopup = new PopupWithForm(".form_type_change-avatar", (data) => {
  api.setUserAvatar(data.url)
  .then(res => {
    avatarPhoto.src = res.avatar;
    profileInfo.changeUserAvatar(res.avatar);
  });
});

changeAvatarPopup.setEventListeners();

const addCardPopupWithForm = new PopupWithForm(".form_type_add-card", (data) => {
  api.addCard(data)
  .then(res => {
    renderCard(res);
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

