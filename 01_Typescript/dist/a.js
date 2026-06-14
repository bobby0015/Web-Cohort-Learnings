"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(fn) {
    setTimeout(fn, 1000);
}
function sum(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
print(() => sum(2, 2));
//# sourceMappingURL=a.js.map