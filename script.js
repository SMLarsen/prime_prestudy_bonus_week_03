var startNum = 35;

function cube(n) {
  return n * n * n;
}

function getSum(total, num) {
    return total + num;
  }

function digiSum(n) {
  return (n.toString(10).split("").map(function(t){return parseInt(t)})).reduce(getSum);
}

function getProd(total, num) {
    return total * num;
}

function digiMult(n) {
  return (n.toString(10).split("").map(function(t){return parseInt(t)})).reduce(getProd);
}

console.log(cube(startNum));
console.log(digiMult(cube(startNum)));
console.log(digiSum(digiMult(cube(startNum))));

document.getElementById("startVal").innerHTML = (startNum);
document.getElementById("f1").innerHTML = cube(startNum);
document.getElementById("f1c").innerHTML = cube.toString();
document.getElementById("f2").innerHTML = digiSum(startNum);
document.getElementById("f2c").innerHTML = digiSum.toString();
document.getElementById("f3").innerHTML = digiMult(startNum);
document.getElementById("f3c").innerHTML = digiMult.toString();
document.getElementById("f1f2").innerHTML = digiMult(cube(startNum));
document.getElementById("f1f2f3").innerHTML = digiSum(digiMult(cube(startNum)));
