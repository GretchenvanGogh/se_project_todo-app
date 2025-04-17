class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  //TODO - implement all other methods

  _checkInputValidity(inputElement) {
    // (1) TODO - implement this method
    //(a) copy body of existing function
    //(b) work through errors in console
    if (!inputElement.validity.valid) {
        showInputError(
          formElement,
          inputElement,
          inputElement.validationMessage,
          settings,
        );
      } else {
        hideInputError(formElement, inputElement, settings);
      }

  }

  _setEventListeners() {
    this._inputList = Array.from(
        this._formElement.querySelectorAll(this._inputSelector)
      );

      //TODO - finish implementing _setEventListeners
      //const buttonElement = formElement.querySelector(
        //settings.submitButtonSelector,
      //);
    
      //toggleButtonState(inputList, buttonElement, settings);
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
        //  toggleButtonState(inputList, buttonElement, settings);
        });
      });
    };
  }
  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
export default FormValidator;
