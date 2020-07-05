import {formOpen, setOverlayListeners} from "./index.js";

class Card {
  constructor(data, templateSelector) {
    this._title = data.text;
    this._image = data.link;
    this._template = templateSelector;
    this._cardElement = this._getTemplate();
    this._cardLikeButton = this._cardElement.querySelector(".elements__heart-icon");
    this._cardRemoveButton = this._cardElement.querySelector(".elements__trash-icon");
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
      this._setEventListeners();
      this._cardElement.querySelector(".elements__image").style.backgroundImage = `url(${this._image})`;
      this._cardElement.querySelector(".elements__name").textContent = this._title;
      console.log(this._cardElement);
      return this._cardElement;
    }

   _fillImagePopup(data) {
      this._bigImage = document.querySelector(".big-image__picture");
      this._bigImageCaption = document.querySelector(".big-image__caption");
      this._bigImage.src = this._image;
      this._bigImageCaption.textContent = this._title;
   }
    
  _setEventListeners() {

    //this is for the popup - either need to import/export functionality or move elsewhere...
  this._cardImage.addEventListener("click", (e)=> {
    e.preventDefault();
    fillImagePopup(data);
    formOpen(document.querySelector(".form_type_image")); //changed this from imagepopup since variable is not defined here
    setOverlayListeners();
 });

 this._cardRemoveButton.addEventListener("click", (evt)=> {
   evt.target.closest(".elements__element").remove();
 });

 this._cardLikeButton.addEventListener("click", ()=> {
    this._cardLikeButton.classList.toggle("elements__heart-icon_theme_dark");
 });
  

}
}

export {Card};