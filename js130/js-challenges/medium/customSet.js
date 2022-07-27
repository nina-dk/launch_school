class CustomSet {
  constructor(elements = []) {
    this.elements = this._getUniqueElements(elements);
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  add(el) {
    if (!this.elements.includes(el)) this.elements.push(el);
    return this;
  }

  contains(el) {
    return this.elements.includes(el);
  }

  isSubset(set) {
    return this.elements.every(el => set.contains(el));
  }

  isDisjoint(set) {
    return !this.elements.some(el => set.contains(el));
  }

  isSame(set) {
    return this.isSubset(set) && set.elements.length === this.elements.length;
  }

  intersection(set) {
    let sharedElements = this.elements.filter(el => set.contains(el));
    return new CustomSet(sharedElements);
  }

  difference(set) {
    let differentElements = this.elements.filter(el => !set.contains(el));
    return new CustomSet(differentElements);
  }

  union(set) {
    let allElements = [...this.elements];
    allElements = allElements.concat(set.elements.filter(el => !allElements.includes(el)));

    return new CustomSet(allElements);
  }

  _getUniqueElements(array) {
    let uniqueElements = [];
    array.forEach(el => {
      if (!uniqueElements.includes(el)) uniqueElements.push(el);
    });

    return uniqueElements;
  }
}

module.exports.CustomSet = CustomSet;