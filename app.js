"use strict";
// src/app.ts
class Greeter {
    constructor(message) {
        this.message = message;
    }
    greet() {
        const element = document.getElementById('greeting');
        if (element) {
            element.innerText = this.message;
        }
    }
}
const greeter = new Greeter('Hello');
greeter.greet();
