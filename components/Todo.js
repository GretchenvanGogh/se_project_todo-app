class Todo {
  constructor(data, selector) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _formatDate() {
    this._dateEL = this._todoElement.querySelector("todo__date");
    this._dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateEL.textContent = `Due:
      ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    this._element = this._getTemplate();
    this._deleteBtnEl = this._element.querySelector(".todo__delete-btn");
    this._generateNameEl();
    this._formDate();
    this._generateCheckboxEl();
    this._setEventListeners();
    return this._element;
  }
}

export default Todo;
