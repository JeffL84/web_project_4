import { setOverlayListeners, formOpen } from "../utils/utils.js";
import {MYID} from "../utils/constants.js";

class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick)  {
    this._title = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._owner = data.owner._id;
    this._handleDeleteClick = handleDeleteClick;

    this._template = templateSelector;
  }

    getId() {
      return this._id;
    }

    _getTemplate() {
      const cardElement = document 
      .querySelector(this._template)
      .content
      .querySelector(".elements__element")
      .cloneNode(true);

      return cardElement;
    }

    generateCard() {
      const element = this._getTemplate();

      this._card = element;
      //remove trash icon for cards that I didn't create
      if (this._owner !== MYID) {
         const hiddenTrashIcon = this._card.querySelector(".elements__trash-icon");
         hiddenTrashIcon.classList.add("elements__trash-icon_is-hidden");
      }
      this._card.querySelector(".elements__image").style.backgroundImage = `url(${this._link})`;
      this._card.querySelector(".elements__name").textContent = this._title;

      this._setEventListeners();
      console.log(this._owner);
      return this._card;
    }

    
deleteCard() {
  this._card.remove();
  this._card = null;
}
    
  _setEventListeners() {

    const cardLikeButton = this._card.querySelector(".elements__heart-icon");
    const cardRemoveButton = this._card.querySelector(".elements__trash-icon");
    const cardImage = this._card.querySelector(".elements__image");
    const cardDeleteConfirmForm = document.querySelector(".form_type_delete-card");
    //const confirmDeleteButton = document.querySelector(".form__card-delete-confirm");

  cardImage.addEventListener("click", (e)=> {
    e.preventDefault();
    this._handleCardClick();
    setOverlayListeners(); 
 });

 //modifying to make popup show up
 cardRemoveButton.addEventListener("click", ()=> {  //removed evt from parameter
  formOpen(cardDeleteConfirmForm);
   //evt.target.closest(".elements__element").remove();
   this._handleDeleteClick(this.getId());
 });



// confirmDeleteButton.addEventListener("click", (e) => {
//   e.preventDefault();
//  this._handleDeleteClick(this.getId());
//  this._element.remove();
 
// })

 cardLikeButton.addEventListener("click", ()=> {
    cardLikeButton.classList.toggle("elements__heart-icon_theme_dark");
    this.getId();
 });
}


}




export default Card;