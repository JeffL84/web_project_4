import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitFunction) {
    super(popupSelector);
    this._formSubmitFunction = formSubmitFunction;
  }

  _getInputValues(){
    const inputList = Array.from(this._popupElement.querySelectorAll(".form__input")); 
    return inputList; 
  }

  setEventListeners() {
    const saveButton = this._popupElement.querySelector(".form__save-button");
    const inputs = this._getInputValues();
    this._inputs = inputs;
    saveButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._formSubmitFunction(this._inputs);
      this.close();
   });

super.setEventListeners();
  }

  close() {
//It modifies the close() parent method in order to reset the form once the popup is closed.
    super.close();
  }

}

export default PopupWithForm;
