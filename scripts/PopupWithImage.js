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

//at ~46:30 in the live coding she suggests to create the new popup when the click event listeners are created (I think)