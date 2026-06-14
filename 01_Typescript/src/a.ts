// Define the interface for user
interface User {
    name : string,
    age : number,
}

function isLegal(user: User): string {
    if(user.age <= 18) return `Sorry! ${user.name} you are not an adult.`
    return `Welcome! ${user.name} to our party.`
}

console.log(isLegal({
    name : 'Divyam Chauhan',
    age : 22
}))