let inventory;

(function() {

  let collection = [];

  inventory = {
    lastId: 0,
    setDate: function() {
      let date = new Date();
      document.querySelector("#order_date").innerText = date.toUTCString();
    },
    cacheTemplate: function() {
      let template = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(template.innerHTML);

      template.remove();
    },
    add: function() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      collection.push(item);

      return item;
    },
    remove: function(idx) {
      collection = collection.filter(item => item.id !== idx);
    },
    _get: function(id) {
      return collection.find(item => item.id === id);
    },
    update: function(input) {
      let id = this.findID(input),
          item = this._get(id);

      item.name = input.querySelector("[name^=item_name]").value;
      item.stock_number = input.querySelector("[name^=item_stock_number]").value;
      item.quantity = input.querySelector("[name^=item_quantity]").value;
      console.log(collection);
    },
    newItem: function(e) {
      e.preventDefault();
      let item = this.add();
      let itemHTML = this.template(item);

      document.querySelector("#inventory").innerHTML += itemHTML;
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return +item.querySelector("input[type=hidden]").value;
    },
    deleteItem: function(e) {
      e.preventDefault();
      let isDeleteLink =(e.target.tagName === "A") && e.target.classList.contains("delete");
      if (!isDeleteLink) return;

      let item = this.findParent(e);
      item.remove();
      this.remove(this.findID(item));
    },
    updateItem: function(e) {
      if (e.target.tagName !== "INPUT") return;

      let item = this.findParent(e);
      this.update(item);
    },
    bindEvents: function() {
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", this.deleteItem.bind(this));
      document.querySelector("#inventory").addEventListener("focusout", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener("DOMContentLoaded", inventory.init.bind(inventory));
