let arr = [1, 2, 3, 4, 5, 6];
function fn(elem){
    if(elem%2==0){
    return elem;
    }
}
let ans = arr.filter(fn);
console.log(ans)