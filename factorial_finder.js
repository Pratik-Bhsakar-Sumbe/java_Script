let factorial = 1 
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for (i=1; i<=n; i++){
  factorial *= (i*1)
	console.log((i+1), "*") 
}
console.log("sum of first" + n + "natural numbers is" + factorial)