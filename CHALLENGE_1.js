// Function that makes the first number as large as possible by swapping 
// out its digits for digits in the second number. Each digit in the second 
// number can only be used ince

let f = (num1, num2) =>{
	answ1 = num1.toString().split("").map(a=>+a)
	answ2 = num2.toString().split("").map(b=>+b)
	for(let i = 0; i < answ1.length; i++){
		let maxval = Math.max(...answ2)
		if(answ1[i] < maxval) {
			answ1[i] = maxval
			answ2.splice(answ2.indexOf(maxval), 1)
		}
	}
	return Number(answ1.join(''));
}

console.log(f(523, 76))
console.log(f(9132, 5564))
console.log(f(8732, 91255))
