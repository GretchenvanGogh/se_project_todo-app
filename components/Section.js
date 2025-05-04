class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      //Call the renderer and pass it the item as an argument
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
