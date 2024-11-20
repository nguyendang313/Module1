// external
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.innerText = "unlike";
})

let a = +prompt("a");
console.log(a);
let b = prompt("b");
console.log(b);
alert(a + b)