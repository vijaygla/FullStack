let str = "bob";

const checkPallindrome = () => {
    let opp = str.split("").reverse().join("");

    if(str === opp) {
        console.log(str, "is Pallindrome");
    }
    else {
        console.log(str, "is not pallindrome");
    }
}

checkPallindrome();
