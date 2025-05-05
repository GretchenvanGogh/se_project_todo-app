class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose); //this._handleEscapeClose?
  }

  close() {
    this._popupElement.classList.remove("popup_visible"); //remove the class from the popup element
    document.removeEventListener("keyup", this._handleEscapeClose); //TODO - remove the escape listener
  }

  setEventListeners() {
    //this one listener will handle close button and modal listeners
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
