
class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }


_showInputError(inputElement){
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = inputElement.validationMessage; //changed from inputElement.validationMessage but not clear on why - Liza had errorMessage
  errorElement.classList.add(this._errorClass);
};

_hideInputError(inputElement)  {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};

//next three functions not modeled in live coding...
_isValid(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement); //removed this._formElement as a parameter???
  } else {
    this._hideInputError(inputElement);
  }
};

//checking the whole form's validity state to toggle button
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

_toggleButtonState(inputList) { //oritinally thought to have this._buttonElement but error messages made me change it...
  if (this._hasInvalidInput(inputList)) {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.classList.add(this._errorClass);
  }
  else {
    buttonElement.classList.remove(this._inactiveButtonClass);
  }
};

_setEventListeners() {
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

 // this._toggleButtonState(inputList, buttonElement); // to start with button disabled
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._isValid(inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  });
}




enableValidation() {
  this._formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  this._setEventListeners();
}

}

export default FormValidator;