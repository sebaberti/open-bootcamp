
let factorial1 = 1
for (let i = 10; i>0; i--) {
    factorial1 *= i
}
console.log(factorial1)


let factorial2 = 1
let num1 = 10
while (num1 > 1) {
    factorial2 *= num1
    num1--
}
console.log(factorial2) 



let factorial3 = 1
let num2 = 10
while (true) {
    factorial3 *= num2
    num2--
    if (num2 === 1) break
}
console.log(factorial3)

