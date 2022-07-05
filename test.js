"use strict";


const dashboard = {
    name: "New Armenian Game",
    width: 1024,
    height: 1024,
    figures: {
        king: "King",
        queen: "Queen"
    },
    aboutOurGame() {
        console.log(dashboard);
    }
};
console.log(dashboard);
delete dashboard.name; // Можем удалять
console.log(dashboard);

for (let key in dashboard) {
    console.log(`Property: ${key}, Value: ${dashboard[key]}`);
    console.log(key,dashboard[key]);
}

// for in => object,array
// for of => array

let c=0;
for (let key in dashboard) {
    if (typeof(dashboard[key]) === "object") {
        for (let nKey in dashboard[key]) {
            console.log (`Property: ${nKey}, Value ${dashboard[key][nKey]}`);
            c++;
        }
    } else {
        console.log(`Property: ${key},Value: ${dashboard[key]}`);
        c++;
    }
  
}


const arr = [50,100];

for (let index in arr) {
    console.log(arr[index]);
}


for (let index of arr) {
    console.log(index);
}


console.log(Object.keys(dashboard));
console.log(Object.values(dashboard));


const {width,height} = dashboard;
console.log(width + height * 2);

console.log(c);
console.log(Object.keys(dashboard).length);

const arr1 = [10,50,100,150,200];

for (let i in arr1) {
    console.log(arr1[i]);
}

for (let i of arr1) {
    console.log(i);
}


const cars = ['Tesla','BMW','Nissan', 'Audi','Rolls-Royce'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

cars.forEach(car => {
    console.log(car);
});

for (const index in cars) {
    if (index === '1') {
        break;
    }
    console.log(cars[index]);
}

for (const index in cars) {
    if (index === '1') {
        continue;
    }
    console.log(cars[index]);
}

for (const car of cars) {
    console.log(car);
}

const auto = {
    name: 'Tesla',
    year: 2021,
    colors: {
        first:'red',
        second:'blue',
        third: 'purple'
    }
}

for (const car of Object.keys(auto)) {
    console.log(car);   // if i want for of
}

for (const car of Object.values(auto)) {
    console.log(car);   // if i want for of
}


const auto = {
    name: 'Tesla',
    year: 2021,
    colors: {
        first:'red',
        second:'blue',
        third: 'purple'
    }
}

for (const values in auto) {
    if (typeof(auto[values]) === "object") {
    for (let nvalues in auto[values]) {
        console.log(auto[values][nvalues]);
    }    
    } else (console.log(values),auto[values]);
}


const aboutMe = { 
    name: "Anna",
    lastName: "Cholakhyan",
    favoritecars: {
        car1: "BMW",
        car2: "AUDI",
        car3: {
            c4:"Rolls-Royse",
            c5:"Rolls-Royse1"
        }
    }
}

for (const me in aboutMe) {
    if (typeof(aboutMe[me]) === "object") {
        for (const nMe in aboutMe[me]) {
            if (typeof(aboutMe[me][nMe]) === "object") {
                for (const nMe1 in aboutMe[me][nMe]) {
                    console.log(aboutMe[me][nMe][nMe1]);
                }    
          } else {
            console.log(aboutMe[me][nMe]);
          }
        } 
    } else {
        console.log (aboutMe[me]);
    }
}

console.log(null || 0 || NaN);


console.log(null || 1 || 4);

console.log ({});