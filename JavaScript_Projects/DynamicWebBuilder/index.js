// this logic is for adding K or M at last of the views
function viewCounter(x) {
    if (x >= 100000 && x < 1000000) {
        console.log("its 100k and above")
    }
    else if (x >= 1000000) {
        console.log("its 1M and above")
    }
}

viewCounter(999999)