// new Object -> Object.prototype

// __proto__ -> não deve ser manipulado.

// O prototype já vem pré definido em todos os objetos criados, porem é possivel altera-ló.

// Object.setPrototypeOf(obj que vai ser configurado, obj que vai puxar o proto).

const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};
// objB -> __proto__: objA -> __proto__: Object.prototype

const objC = new Object();
objC.chaveC = 'C';
// objC -> __proto__: objB -> __proto__: objA -> __proto__: Object.prototype

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);