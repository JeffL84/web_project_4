import Popup from "./Popup.js";

//It takes a callback of the form submission into the constructor, as well as the popup selector.

class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitFunction) {
    super(popupSelector);
    this._formSubmitFunction = formSubmitFunction;
  }

  _getInputValues(){
//collects data from input fields
    const inputList = Array.from(this._popupElement.querySelectorAll(".form__input")); 
    console.log(inputList);
    this._inputList = inputList; 
  }

  setEventListeners() {
//  It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.
//NOT ATTEMPTED YET  
super.setEventListeners();
  }

  close() {
//It modifies the close() parent method in order to reset the form once the popup is closed.
    this._formSubmitFunction(); //not sure how to pass values into it?
    this._popupElement.reset();
    super.close();
  }

}


export default PopupWithForm;

// in index.js: Create an instance of the PopupWithForm class for each popup.
// write the two separate scripts for the formSubmitFunctions when doing this...