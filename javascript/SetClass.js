class SetClass {
  constructor() {
    this.length = 0;
    this.collection = [];
  }

  // check if element is in the collection
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return the collection
  values() {
    return this.collection;
  }

  // add
  add(element) {
    // the element already in the collection, do not add and return false
    if (this.has(element)) {
      return false;
    }
    this.collection.push(element);
    this.length++;
    return true;
  }

  // delete an element from the collection
  delete(element) {
    // check if its in the collection
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1); // starting at index, remove 1 element
      this.length--;
      return true;
    }
    return false; // not in the collection so just return false
  }

  size() {
    return this.length;
  }

  union(set) {
    // initialize an empty set
    const unionSet = new SetClass();

    // get the values from this set and the given set
    const set_A_values = this.values();
    const set_B_values = set.values();

    // add SetA to the union set
    set_A_values.forEach(element => {
      unionSet.add(element);
    });

    // add the setB to the union set
    set_B_values.forEach(element => {
      unionSet.add(element);
    });

    // return the union set
    return unionSet;
  }

  intersection(set) {
    // initialize an empty set
    const intersectionSet = new SetClass();

    // get the values from this set
    const set_A_values = this.values();

    set_A_values.forEach(element => {
      if (set.has(element)) {
        // add to the intersection set
        intersectionSet.add(element);
      }
    });

    // return the intersection set
    return intersectionSet;
  }

  // returns the differences of two sets
  difference(set) {
    const differenceSet = new SetClass();
    const set_A_values = this.values();

    set_A_values.forEach(element => {
      // add the element if not in the other set
      if (!set.has(element)) {
        differenceSet.add(element);
      }
    });

    // return the difference set
    return differenceSet;
  }

  // checks if the set is a subset of another set
  subset(set) {
    const set_A_values = this.values();
    return set_A_values.every(element => set.has(element));
  }
}

module.exports = SetClass;
