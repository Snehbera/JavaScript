// Chapter 5 Practice Set
// Practice Problem 1
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
//let a = prompt("Enter a number")
let a1 = 520;
a1 = Number.parseInt(a1)
arr1.push(a1)
console.log(arr1)

// Practice Problem 2
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]
let a2;
do {
  a2 = prompt("Enter a number")
  a2 = Number.parseInt(a2)
  arr2.push(a2)
} while (a2 != 0);
console.log(arr2)

// Practice Problem 3
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n3 = arr3.filter((x)=>{
  return x%10 == 0
})
console.log(n3)

// Practice Problem 4
let arr4 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n4 = arr4.map((x)=>{
  return x*x
})
console.log(n4)

// Practice Problem 5
let arr5 = [1, 2, 3, 4, 5]
let n5 = arr5.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n5)

let arr6 = [41, 54, 36]
let a6 = arr1.map((element,ind) =>{
    console.log(element , ind)
    return element + 1
})
console.log(a6)
console.log(arr6)