import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const adjustDateTimezone = (dateInput) => {
  if (!dateInput) {
    return "";
  }
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
};

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {},
});

addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

section.renderItems(); //call section instances renderItems method

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    // Find the opened popup and close it
    const openedPopup = document.querySelector(".popup_visible");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

//const openModal = (modal) => {
//modal.classList.add("popup_visible");
//  document.addEventListener("keydown", handleEscClose);
//};

//const closeModal = (modal) => {
//  modal.classList.remove("popup_visible");
//  document.removeEventListener("keydown", handleEscClose);
// };

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//addTodoCloseBtn.addEventListener("click", () => {
//  addTodoPopup.close();
//});

//addTodoForm.addEventListener("submit", (evt) => {
// evt.preventDefault();
//const name = evt.target.name.value;
//const dateInput = evt.target.date.value;
//newTodoValidator.resetValidation();

//const date = adjustDateTimezone(dateInput);

//const id = uuidv4();

//const values = { name, date, id };
//const todo = generateTodo(values);
//section.addItem(todo);

//addTodoPopup.close();
//});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
