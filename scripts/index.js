const form = document.querySelector(".form_type_edit-profile");
const addForm = document.querySelector(".form_type_add-card");
const imagePopup = document.querySelector(".form_type_image");

//form does not reference the <form> tagged element in the html. editProfileForm does
const editProfileForm = document.forms.profileForm;
console.log(editProfileForm);

const userName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name-profile");
const formOccupation = document.querySelector(".form__description-profile");

const addFormTitle = addForm.querySelector(".form__name-card");
const addFormUrl = addForm.querySelector(".form__description-card");

const editButton = document.querySelector(".profile__edit-button");
const saveButton = document.querySelector(".form__save-button");
const closeButton = form.querySelector(".form__close-button");
const addCardCloseButton = addForm.querySelector(".form__close-button");
const saveCardButton = addForm.querySelector(".form__save-button");
const imageCloseButton = imagePopup.querySelector(".form__close-button");
const addButton = document.querySelector(".profile__add-button");

const cardTemplate = document.querySelector(".elements__template").content.querySelector(".elements__element");
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

function formToggle(modal) {
   modal.classList.toggle('form_is-opened'); 
}

function editFormSave(){
    userName.textContent = formName.value; 
    occupation.textContent = formOccupation.value; 
}

function fillImagePopup(data) {
   const bigImage = imagePopup.querySelector(".big-image__picture");
      const bigImageCaption = imagePopup.querySelector(".big-image__caption");
      bigImage.src = data.link;
      bigImageCaption.textContent = data.name;
}

const createCard = (data) => {
   const cardElement = cardTemplate.cloneNode(true);
   const cardImage = cardElement.querySelector(".elements__image");
   const cardTitle = cardElement.querySelector(".elements__name");
   const cardLikeButton = cardElement.querySelector(".elements__heart-icon");
   const cardRemoveButton = cardElement.querySelector(".elements__trash-icon");

   cardTitle.textContent = data.name;
   cardImage.style.backgroundImage = `url(${data.link})`;

   cardImage.addEventListener("click", (e)=> {
      e.preventDefault();
      fillImagePopup(data);
      formToggle(imagePopup);
   });

   cardRemoveButton.addEventListener("click", (evt)=> {
     evt.target.closest(".elements__element").remove();
   });

   cardLikeButton.addEventListener("click", ()=> {
      cardLikeButton.classList.toggle("elements__heart-icon_theme_dark");
   });

   return cardElement;
};

const renderCard = (data) => {
   list.prepend(createCard(data));
};


initialCards.forEach((data) => {
   renderCard(data);
});

// check for validity and show/hide error messages

const showInputError = (formElement, inputElement, errorMessage) => {
  //I might have to go back and add IDs for these elements to use the # format?
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  console.log(errorElement);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  //need to define the class below and add it to html???
  errorElement.classlist.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//setting event listeners for all forms

const setEventListeners = (formElement) => {
  //make sure all inputs have this class .form__input
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

// initial attmept at input listeners for form validation

// editProfileForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

// });

// formName.addEventListener("input", isValid(formName));
// console.log(formName);

// formOccupation.addEventListener("input", isValid(formOccupation));
// console.log(formOccupation);

//button listeners start here

saveButton.addEventListener("click", (e) => {
   e.preventDefault();
   editFormSave();
   formToggle(form);
});

closeButton.addEventListener("click", (e) => {
   e.preventDefault();
   formToggle(form);
});

editButton.addEventListener("click", () => {
   formName.value = userName.textContent; 
   formOccupation.value = occupation.textContent; 
   formToggle(form);
})

addButton.addEventListener("click", (e) => {
   e.preventDefault();
   formToggle(addForm);
})

addCardCloseButton.addEventListener("click", (e) => {
   e.preventDefault();
   formToggle(addForm);
})

saveCardButton.addEventListener("click", (e) => {
   e.preventDefault();
   renderCard({name: addFormTitle.value, link: addFormUrl.value});
   formToggle(addForm);
   addFormUrl.value = "";
   addFormTitle.value = "";
});

imageCloseButton.addEventListener("click", (e) => {
   e.preventDefault();
   formToggle(imagePopup);
});
