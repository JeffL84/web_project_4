import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitFunction) {
    super(popupSelector);
    this._formSubmitFunction = formSubmitFunction;
  }

  _getInputValues(){
    const values = {};
    const inputList = Array.from(this._popupElement.querySelectorAll(".form__input"));
    inputList.forEach(input => values[input.name] = input.value);
    return values; 
  }

  setEventListeners() {
    const saveButton = this._popupElement.querySelector(".form__save-button");
    saveButton.addEventListener("click", (e) => {
      e.preventDefault();
      const inputs = this._getInputValues();
      this._inputs = inputs;
      saveButton.textContent = "Saving...";
      this._formSubmitFunction(this._inputs);
      this.close();
   });

super.setEventListeners();
  }

  setDeleteHandler(handler) {
    this._formSubmitFunction = handler;
  }

}

export default PopupWithForm;
