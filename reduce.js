let arr = [5, 10, 15, 20];
function fn(elem,acc){
    return acc+elem;
}
let ans = arr.reduce(fn, 0);
console.log(ans)