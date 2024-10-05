let arr = [1, 2, 3, 4, 5];
function print(elem){
    console.log(elem+elem);
}
function forEachCustom(arr, callback){
for(let i = 0; i < arr.length; i++){
    callback(arr[i], i, arr)
}
}
forEachCustom(arr, print );
