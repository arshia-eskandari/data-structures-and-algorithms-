class Person {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.isAlive = true;
    }
}

class Monarchy {
    constructor(king) {
        this.king = new Person(king);
        this._people = { [this.king.name]: this.king };
    }
    birth(child, parent) {
        const parent = this._people[parent];
        const newChild = new Person(child);
        parent.children.push(newChild);
        this._people[child] = newChild;
    }

    death(name) {
        const person = this._people[name];
        if (!person) return null;
        person.isAlive = false;
    }

    _dFS(current, array) {
        if (current.isAlive) array.push(current.name);
        for (const child of current.children) this._dFS(child, array);
    }

    getOrderOfSuccession() {
        const array = [];
        this._dFS(this.king, array);
        return array;
    }
}
