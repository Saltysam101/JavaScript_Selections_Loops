console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++) {
    if (Math.abs(i % 2 == 1)) {
        console.log(i)
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ")
    } else if (i % 5 == 0) {
        console.log("BUZZ")
    } else if (i % 3 == 0) {
        console.log("FIZZ")
    } else {
        console.log(i)
    }

}

console.log("EXERCISE 3:\n==========\n");

let i = 0;
while (i <= 100) {
    console.log(i)
    i++;
}

do {
    console.log(i)
    i++
} while (i <= 100)

while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ")
    } else if (i % 5 == 0) {
        console.log("BUZZ")
    } else if (i % 3 == 0) {
        console.log("FIZZ")
    } else {
        console.log(i)
    }
    i++;
}

do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ")
    } else if (i % 5 == 0) {
        console.log("BUZZ")
    } else if (i % 3 == 0) {
        console.log("FIZZ")
    } else {
        console.log(i)
    }
    i++;

} while (i <= 100)

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log(`Found ${value}`)
        break;
    }

    if (i === n) {

        console.log(`Did not find ${value} from 1 to ${n}`)
    }
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= end; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FIZZBUZZ")
    } else if (i % buzzDivisor == 0) {
        console.log("BUZZ")
    } else if (i % fizzDivisor == 0) {
        console.log("FIZZ")
    } else {
        console.log(i)
    }
}