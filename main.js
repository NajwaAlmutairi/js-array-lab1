// باستعمال for loop قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0.
// Q1
for (let i = 0; i <= 25; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// • باستعمال for loop  احسب تربيع الاعداد من 1 - 10.
// Q2

for (let i = 0; i <= 10; i++) {
    console.log(i * i);
}


// Q3 
// • باستعمال loop قم بطباعة الاعداد الفردية من 1 - 20 .

console.log('Q3');
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Q4
// Fibonacci sequence:
console.log('Q4');

let n1 = 0, n2 = 1, next;
for (let i = 1; i <= 10; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}

// Q5

console.log("Q5");

for (let i = 0; i <= 10; i++) {
    console.log(i * i);
}

// Q6
console.log("Q6");

for(let i = 1; i <= 3; i++) {
    for(let j =1;j<=10;j++){
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
   
}
