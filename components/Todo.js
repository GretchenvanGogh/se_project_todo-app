export const adjustDateTimezone = (dateInput) => {
  if (!dateInput) {
    return null;
  }
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
};

class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._data.completed);
      this._todoElement.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._data.completed);
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
    if (!this._date) {
      return "";
    }
    const dueDate = adjustDateTimezone(this._date);
    if (dueDate && !isNaN(dueDate)) {
      return `Due:
      ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`.trim();
    }
    return "";
  }

  _getTemplate() {
    const template = document.querySelector(this._selector);
    return template.content.firstElementChild.cloneNode(true);
  }

  _generateNameEl() {
    const todoName = this._todoElement.querySelector(".todo__name");
    todoName.textContent = this._name;
  }

  _generateDateEl() {
    const todoDate = this._todoElement.querySelector(".todo__date");
    todoDate.textContent = this._formatDate();
  }

  getView() {
    this._todoElement = this._getTemplate();
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._generateNameEl();
    this._generateDateEl();
    this._generateCheckboxEl();
    this._setEventListeners();
    return this._todoElement;
  }
}

export default Todo;
