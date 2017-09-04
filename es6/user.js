export class User {
  constructor(name) {
    this.name = name
  }

  hello() {
    return 'hello ' + this.name
  }
}

export class Boss extends User {
  constructor(name, level) {
    super(name)

    this.level = level
  }

  getLevel() {
    return this.name + ' is ' + this.level
  }
}

Boss.prototype.give = function(something) {
  return this.name + ' give ' + something
}
