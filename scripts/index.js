import Card from "./card.js";
import FormValidator from "./FormValidator.js";

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

//attempt at using formValidator class above...not doing anything eyt...and no error messages :(

const form = document.querySelector(".form_type_edit-profile");
const addForm = document.querySelector(".form_type_add-card");
const imagePopup = document.querySelector(".form_type_image");

const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name-profile");
const formOccupation = document.querySelector(".form__description-profile");

//these are needed for the cards
const addFormTitle = addForm.querySelector(".form__name-card");
const addFormUrl = addForm.querySelector(".form__description-card");

const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".form__save-button");
const closeButton = form.querySelector(".form__close-button");
const addCardCloseButton = addForm.querySelector(".form__close-button");

//this impacts the cards
const saveCardButton = addForm.querySelector(".form__save-button");
const imageCloseButton = imagePopup.querySelector(".form__close-button");
const addButton = document.querySelector(".profile__add-button");

const list = document.querySelector(".elements");

const formOverlays = document.querySelectorAll(".form__overlay");
const formOverlaysList = Array.from(formOverlays);

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

function handleEscUp(evt) {
  const formsList = Array.from(document.querySelectorAll(".form"));
    if (evt.keyCode == 27) {
      formsList.forEach((modal) => {
          if (modal.classList.contains("form_is-opened")) {
            formClose(modal);
        }
        }); 
      }
}

function formOpen(modal) {
  modal.classList.add("form_is-opened");
  document.addEventListener("keyup", handleEscUp);
}

function formClose(modal) {
  modal.classList.remove("form_is-opened");
  document.removeEventListener("keyup", handleEscUp);
}

function editFormSave(){
    userName.textContent = formName.value; 
    occupation.textContent = formOccupation.value;
}
//new rewritten function using the Card class
const renderCard = (data) => {
  const card = new Card(data, ".elements__template");
  list.prepend(card.generateCard());
};

initialCards.forEach((data) => {
   renderCard(data);
});

//overlay listeners

function closeParentForm(evt) {
  formClose(evt.target.closest(".form"));
  evt.target.removeEventListener("click", closeParentForm);
}

function setOverlayListeners() {
  formOverlaysList.forEach((overlayElement) => {
   overlayElement.addEventListener("click", closeParentForm);
  }
)};

//button listeners start here

saveButton.addEventListener("click", (e) => {
   e.preventDefault();
   editFormSave();
   formClose(form);
});

closeButton.addEventListener("click", (e) => {
   e.preventDefault();
   formClose(form);
});

editButton.addEventListener("click", () => {
  //edited to match new figma requirements 
  //  formName.value = userName.textContent; 
  //  formOccupation.value = occupation.textContent; 
   formOpen(form);
   setOverlayListeners();
})

addButton.addEventListener("click", (e) => {
   e.preventDefault();
   formOpen(addForm);
   setOverlayListeners();
})

addCardCloseButton.addEventListener("click", (e) => {
   e.preventDefault();
   formClose(addForm);
})

saveCardButton.addEventListener("click", (e) => {
   e.preventDefault();
   renderCard({name: addFormTitle.value, link: addFormUrl.value});
   formClose(addForm);
   addFormUrl.value = "";
   addFormTitle.value = "";
});

imageCloseButton.addEventListener("click", (e) => {
   e.preventDefault();
   formClose(imagePopup);
});

export { handleEscUp, setOverlayListeners };