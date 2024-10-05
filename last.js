let arr = [1, 2, 3, 4, 5]
    function fn(elem){
        if(elem%2==0){
            return elem;
        }
    }
    let ans = arr.filter(fn);
    function fn1(elem1){
        return elem1 * elem1;
    }
    let ans1 = ans.map(fn1)
    //console.log(ans1)

    function fn2(elem2,acc){
        return acc+elem2;
    }
    let ans2 = ans1.reduce(fn2, 0);
    console.log(ans2)
    