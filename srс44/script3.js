class StringBuilder {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    append() {
        return this._value;
    }
    prepend() {
        return this._value;
    }
    pad() {
        return this._value;
    }
}


// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend() - получает парметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец _value

const builder = new StringBuilder('.');


builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='