
class Section {
  constructor({items, renderer}, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  
  
  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    //list.prepend(card.generateCard());
    this._container.prepend(element);
  }

}
console.log("huh");


export default Section;