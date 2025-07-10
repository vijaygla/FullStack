function outer() {
    let out = "This is outer variable";

    function inner() {
        console.log(out);
    }
    return inner;
}

const closureFunction = outer();
closureFunction();
