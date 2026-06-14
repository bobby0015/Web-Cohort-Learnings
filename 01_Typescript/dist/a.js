"use strict";
// Define the interface for user
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age <= 18)
        return `Sorry! ${user.name} you are not an adult.`;
    return `Welcome! ${user.name} to our party.`;
}
console.log(isLegal({
    name: 'Divyam Chauhan',
    age: 22
}));
//# sourceMappingURL=a.js.map