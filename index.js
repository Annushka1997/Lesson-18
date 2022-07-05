"use strict";

// 1 Առաջին հարցի պատասխանը

const obj = {
    name:"Anna",
    lastName:"Cholakhyan",
    dab: 1997,
    age: 24,
    pob:"Georgia",
    favoriteColors: {
        first: "Blue",
        second: "Violet",
        third: "Purple"
    },
    favoriteCars: {
        car1: "BMW",
        car2: "Rolls-Royce",
        car3: "Porsche"
    },
    language:{
        lang1:"Armenian",
        lang2:"Russian",
        lang3:"Georgian",
        lang4:"English"
    },
    programmingLanguages: {
        l1: "HTML",
        l2: "CSS",
        l3: "JS",
        l4: "Arduino",
        l5: {
            language5: "Scratch",
            language6: "KTurtle"
        }
    },

    favoriteCompanies:{
        company1: "Microsoft",
        company2: "Apple",
        company3: "Ubisoft",
        company4: "WIX",
        company5: "Google",
        company6: "IBM",
        company7: "Facebook"
}
    };


for (let key in obj) {
    if (typeof(obj[key]) === "object"){
        for (let nKey in obj[key]){
            if (typeof(obj[key][nKey]) === "object") {
                for (let nnKey in obj[key][nKey]) {
                    console.log(`Property:${nKey}, Value:${obj[key][nKey][nnKey]}`);
                }
            } else {
                console.log(`Property:${nKey}, Value:${obj[key][nKey]}`);
            }   
        }
    } else {
        console.log(`Property: ${key}, Value: ${obj[key]}`);
    }
}


// 2 Երկրորդ հարցի պատասխանը

const array = [1,2,3,4,5,[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20]];

for (let values of array){ 
    if (typeof(values) === "object") {
        for (let nValues of values) {
            console.log (`Value:${nValues}`);
        }
    } else {
    console.log(`Value:${values}`);
}
}

// 3 Երրորդ հարցի պատասխանը

const obj2 = {
    brand: "BMW",
    model:"M5 E60",
    years:{
        creationDate: 2008
    }                                   // Առաջին տարբերակ
};

function getObj2 ({brand,model}) {
    console.log (brand,model);
}

getObj2(obj2);

const obj3 = {
    brand: "BMW",
    model:"M5 E60",                           // Երկրորդ տարբերակ
    years:{
        creationDate: 2008
    },
    getObj () {
        console.log ("BMW M5 E60 2008");
    }
};                              


const {getObj} = obj3;
getObj();


const array1 = [function getObj1 () {console.log ("Hi,I am here");}];

const [getMyObj] = array1;
getMyObj();



