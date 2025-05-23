const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

const App = {
  populateSelects(cars) {
    let types = Object.keys(cars[0]);
    types.splice(1, 1);

    let selects = types.reduce((arr, type) => {
      let options = this.selectedValues[type] ?
        [this.selectedValues[type]] : this.getUniqValuesFor(type, cars);

      arr.push({ type, options });
      return arr;
    }, []);

    $("#selects").append(this.populateSelectsTemp({ selects }));
    this.updateSelectAttributes();
  },
  updateSelectAttributes() {
    for (let [name, value] of Object.entries(this.selectedValues)) {
      let selectedOption = $(`select[name=${name}] option[value='${value}']`);
      selectedOption.attr("selected", true);
    }
  },
  getUniqValuesFor(prop, collection) {
    return [...new Set(collection.map((({ [prop]: value }) => value)))];
  },
  filterCars(selections) {
    return cars.filter(car => {
      for (let [name, value] of Object.entries(selections)) {
        if(car[name] !== value && value !== "") {
          return false;
        }
      }

      return true;
    });
  },
  displayCarInfo(cars) {
    $("#cars").append(this.carsTemp({ cars }));
  },
  resetSelectedValues() {
    this.selectedValues = {
      make: "", model: "", year: "", price: ""
    };
  },
  compileTemplates() {
    this.carsTemp = Handlebars.compile($("#add_cars").html());
    this.populateSelectsTemp = Handlebars.compile($("#selects_form").html());
    this.populateSelectTemp = Handlebars.compile($("#populate_select").html());

    Handlebars.registerPartial("add_car", $("#add_car").html());
    Handlebars.registerPartial("populate_select", $("#populate_select").html());

    Handlebars.registerHelper("isMakeOrModel", function(type) {
      return type === "make" || type === "model";
    });
    Handlebars.registerHelper("capitalizeType", function(type) {
      return type[0].toUpperCase() + type.slice(1);
    });
  },
  handleFormSubmission(e) {
    e.preventDefault();
    let selectedCars = this.filterCars(this.selectedValues);

    $("#cars").empty();
    this.displayCarInfo(selectedCars);
    this.resetSelectedValues();
    $("#selects fieldset").remove();
    this.populateSelects(cars);
  },
  handleSelectionChange(e) {
    let { name, value } = e.target;
    if (["year", "price"].includes(name)) value = +value;
    this.selectedValues[name] = value;
    let cars = this.filterCars(this.selectedValues);

    $("#selects fieldset").remove();
    this.populateSelects(cars);
  },
  bindEvents() {
    $("form").on("submit", this.handleFormSubmission.bind(this));
    $("#selects").on("change", "select", this.handleSelectionChange.bind(this));
  },
  init() {
    this.resetSelectedValues();
    this.compileTemplates();
    this.populateSelects(cars);
    this.displayCarInfo(cars);
    this.bindEvents();
  }
}

$(() => App.init());