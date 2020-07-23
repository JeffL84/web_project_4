import { formOpen, setOverlayListeners, fillImagePopup, handleEscUp} from "../utils/utils.js";
import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(data, templateSelector, handleCardClick)  {
    this._title = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._template = templateSelector;
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
      this._card.querySelector(".elements__image").style.backgroundImage = `url(${this._link})`;
      this._card.querySelector(".elements__name").textContent = this._title;

      this._setEventListeners();
      return this._card;
    }
    
  _setEventListeners() {

    const cardLikeButton = this._card.querySelector(".elements__heart-icon");
    const cardRemoveButton = this._card.querySelector(".elements__trash-icon");
    const cardImage = this._card.querySelector(".elements__image")

  cardImage.addEventListener("click", (e)=> {
    e.preventDefault();
    const bigImagePopup = new PopupWithImage(".form_type_image");
    this._handleCardClick();
    setOverlayListeners(); 
 });

 cardRemoveButton.addEventListener("click", (evt)=> {
   evt.target.closest(".elements__element").remove();
 });

 cardLikeButton.addEventListener("click", ()=> {
    cardLikeButton.classList.toggle("elements__heart-icon_theme_dark");
 });
}
}

export default Card;