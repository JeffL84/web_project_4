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
    console.log(values); 
    return values; 
  }

  setEventListeners() {
    const saveButton = this._popupElement.querySelector(".form__save-button");
    saveButton.addEventListener("click", (e) => {
      e.preventDefault();
      const inputs = this._getInputValues();
      this._inputs = inputs;
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
