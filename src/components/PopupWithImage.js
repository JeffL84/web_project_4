import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({link, caption}) {
    this._popupElement.querySelector(".big-image__picture").src = link;
    this._popupElement.querySelector(".big-image__caption").textContent = caption;

    super.open();
  }
};

export default PopupWithImage;
