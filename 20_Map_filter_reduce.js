//>>>-----Map-----<<<

let arr = [41, 54, 36]
let a = arr.map((element,ind) =>{
    console.log(element , ind)
    return element + 1
})
console.log(a)
console.log(arr)

//>>>-----Filter-----<<<

let arr1 = [58, 36, 45, 52, 12]
let narr = arr1.filter((value) =>{
    return value<50
})
console.log(narr)
console.log(arr1)

//>>>-----Reduce-----<<<
let arr3 = [2, 3, 6, 5, 4]
let a3 = arr3.reduce((s1, s2) =>{
    return s1 + s2
})
console.log(a3)
// 20