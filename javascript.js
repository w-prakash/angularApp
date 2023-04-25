//without using inbuilt methods reverse the string;
/* let str1 = 'welcome to Javascript';
	console.log(str1.split(''));
	//forLoop
	let str2 = "";
	for(let i=str1.split('').length; i>0; i--) {
			if(str1[i]) {
				str2 +=str1[i]
			}
	}
	console.log(str2) */
//shift //pop
/* let array = [1,2,3,4,5,6];
console.log(array[1]) */

/* let name = 'bhavesh prakash'
let sorts = name.split('').sort();
let check = sorts.reduce((acc, curr) => {
		if(acc[curr]) {
			acc[curr] = ++acc[curr];
		} else {
			acc[curr] = 1;
		}
		return acc;
}, {})
console.log(check) */
/* var firstWord = "Mary";
var secondWord = "Army";
function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
	console.log(a,b)
  return a === b;
}
console.log(isAnagram(firstWord, secondWord)) */
/* mul(2)(3)(4)
	function mul(x) {
	   return function(y) {
		   return function(z) {
			 	return x*y*z;
			 }
		 }
	}
console.log(mul(2)(3)(4)) */
//using reduce function check now many numbers are getting repeated:
/* let arr1 = [1,2,3,4,5,3,2,2,8,9,6,7,3,4];

let unique = arr1.reduce((acc, value) => {
		if(acc[value]) {
			acc[value] = acc[value] + acc[value]
		} else {
		acc[value] = 1;
		}
		return acc;
},{})
console.log(unique) */

//How would you check if a number is an integer?
/* 	let num = 10;
	console.log( num % 1 == 0) //true or false; */

//Reverse of String
/* let str = "welcome to Javascript";
let finalStr = str.split('').reverse().join('');
console.log('finalStr...', finalStr) */
/* currying 
 function sum(x) {
		return function(y) {
			return function(z) {
					return x+y+z;
			}
		}
}
console.log(sum(10)(20)(30)) */

/* let total = 0;
function num(...rest) {
		for(let i=0; i<rest.length; i++) {
				total += rest[i]
		}
}

num(10,20,30,40,50)
console.log(total) */
/* let num = [1,56,2,10,[2,3,4],[3,4,5],[5,6,7],[8],[8,9],[9],[2,5],[8,9],[10]]
let array = []
let unique = [];
function flattenArray(callback) {
for(let i=0; i < num.length; i++) {
	if(typeof(num[i]) != 'number') {
		array.push(...num[i]);
	} else {
	array.push(num[i])
	}
}	
 callback();
}
flattenArray(removeDup); 

function removeDup() {
	for(let i=0; i<array.length; i++) {
		if(!unique.includes(array[i])) {
		console.log(array[i])
			unique.push(array[i])
		}
	}
	unique.sort((a,b) => {return a-b})
}
console.log(unique) */

/* let array2 = ['g','h','k','e','f','a','c','d','e'];
let alpha = array2.sort((a,b) => {
				if(a < b) {
				return -1;
				} 
				if(a > b) {
				return 1;
				}
				return 0;
})
	console.log(alpha); */
/* let array = [1,5,6,8,9,2,3,5,6,5,4,7];

let num = array.sort((a,b) => {
return a-b;
})
console.log(num); */
