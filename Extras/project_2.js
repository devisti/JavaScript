// factorial project using js

// for (let i = 1; i <=10; i++) {
//     console.log(`2 x ${i} = ${i*2}`)

// }


let k = 8;

function factorial(N) {

    let result = 1;
    for (let i = 1; i <= N; i++) {

        result*=i;

    }
    console.log(result)
}


factorial(k)