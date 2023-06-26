//Problem 1
let name = "Bera senh"
console.log(name.length)


//Problem 2
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false


// Problem 3
const word = "Sneh Bera"
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Problem 4
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Problem 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable