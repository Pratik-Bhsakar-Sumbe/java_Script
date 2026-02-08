let a = prompt("enter the number to check rather its devisible by 2 and 3")
a= Number.parseInt(a);
if (a%2 == 0 && a % 3 == 0){
    console.log(a, ":is divisible")
}
else {
  alert("this number is not divisible")
}