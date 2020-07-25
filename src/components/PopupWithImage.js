import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, caption}) {
    const bigImagePopupImage = this._popupElement.querySelector(".big-image__picture");
    bigImagePopupImage.src = link;
    bigImagePopupImage.alt = caption;
    this._popupElement.querySelector(".big-image__caption").textContent = caption;

    super.open();
  }
};

export default PopupWithImage;
