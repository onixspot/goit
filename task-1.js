class StringBuilder extends String {
    value;

    constructor(value = '') {
        super(value);
        this.value = value;
    }

    prepend(value) {
        this.value = `${value}${this.value}`;

        return this;
    }

    append(value) {
        this.value = `${this.value}${value}`;

        return this;
    }

    pad(value) {
        this.value = `${value}${this.value}${value}`;

        return this;
    }

    toString() {
        return this.value;
    }
}

const builder = new StringBuilder('.');
builder
    .append('^')
    .prepend('^')
    .pad('=');

console.log(builder);