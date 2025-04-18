class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formEl.querySelector(
      "#${inputElement.id}-error"
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(
      "#${inputElement.id}-error"
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    const formIsValid = inputList.every(
      (inputElement) => inputElement.validity.valid
    );
    if (formIsValid) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}

const FormValidator = new FormValidator(settings, formElement);
FormValidator.enableValidation();

export default FormValidator;
