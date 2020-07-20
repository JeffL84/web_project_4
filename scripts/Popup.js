class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    //next line from live coding ~40 min in (not in theory)
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add(".form_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove(".form_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.witch === 27) {
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