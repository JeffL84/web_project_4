// check for validity and show/hide error messages

const showInputError = (formElement, inputElement, {errorClass, inputErrorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  console.log(errorElement);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//checking the whole form's validity state to toggle button

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (listOfInputs, formButtonElement) => {
  if (hasInvalidInput(listOfInputs)) {
    formButtonElement.classList.add("form__save-button_type_inactive");
  }
  else {
    formButtonElement.classList.remove("form__save-button_type_inactive");
  }
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  console.log(formList);
  console.log(inputSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", ((evt) => {
      evt.preventDefault();
    }));

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    console.log(inputList);
    console.log(buttonElement);

    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement);
    });
  });
});
}

enableValidation({
  formSelector: ".form-with-button", // my  line 57
  inputSelector: ".form_input", // my  line 45
  submitButtonSelector: ".form__save-button", // my  line 46
  inactiveButtonClass: "form__save-button_type_inactive", // my  lines 35,38
  inputErrorClass: "form__input_type_error", //  @top
  errorClass: "form__input-error_active" //  @ top
});
