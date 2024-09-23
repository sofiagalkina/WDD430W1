// src/app.ts
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        var element = document.getElementById('greeting');
        if (element) {
            element.innerText = this.message;
        }
    };
    return Greeter;
}());
var greeter = new Greeter('Hello, this message was generated from the app.ts file');
greeter.greet();
