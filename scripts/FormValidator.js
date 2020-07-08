
class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }


_showInputError(inputElement, errorMessage){
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage; //changed from inputElement.validationMessage but not clear on why
  errorElement.classList.add(this._errorClass);
};

_hideInputError(inputElement)  {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};

_setEventListeners() {
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

 // toggleButtonState(inputList, buttonElement, rest); // might need this...different from Liza's
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._isValid(inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  });
}


//not done by Liza (next three functions)
_isValid(inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(this._formElement, inputElement);
  } else {
    hideInputError(this._formElement, inputElement);
  }
};

//checking the whole form's validity state to toggle button
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

_toggleButtonState(inputList) {
  if (hasInvalidInput(inputList)) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.classList.add(this._errorClass);
  }
  else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }
};

enableValidation() {
  this._formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  this._setEventListeners;
}

}

export default FormValidator;