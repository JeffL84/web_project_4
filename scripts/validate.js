// check for validity and show/hide error messages

const showInputError = (formElement, inputElement, {errorClass, inputErrorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {errorClass, inputErrorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

//checking the whole form's validity state to toggle button

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass, errorClass}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.classList.add(errorClass);
  }
  else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", ((evt) => {
      evt.preventDefault();
    }));

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, rest);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
});
}

enableValidation({
  formSelector: ".form-with-button", 
  inputSelector: ".form__input", 
  submitButtonSelector: ".form__save-button", 
  inactiveButtonClass: "form__save-button_type_inactive", 
  inputErrorClass: "form__input_type_error", 
  errorClass: "form__input-error_active"
});
