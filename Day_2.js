let a = prompt("Hey, what is your age?");
a = Number.parseInt(a);

if (a < 0) {
    alert("This is an invalid age");
}
else if (a < 9) {
    alert("You are a kid, you cannot drive or think of it");
}
else if (a < 18) {
    alert("You are a kid and you can think of driving after 18");
}
else {
    alert("You can now drive as you are above 18");
}

console.log("You can", a < 18 ? "not drive" : "drive");
