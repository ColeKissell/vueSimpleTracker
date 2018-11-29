export class Item {
    constructor({ name = ``, description = `` } = {}) {
      this.name = name;
      this.description = description;
    }
  }
  
  export function createItem(data) {
    return Object.freeze(new Item(data));
  }