const ESCKEYCODE = 27;

class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("form_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("form_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.which === ESCKEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.querySelector(".form__close-button").addEventListener("click", () => {
      this.close();
    });
  }

}

export default Popup;