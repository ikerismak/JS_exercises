

let year = prompt('enter the year: ')
let monthEntry = prompt('enter the month: ')
let month = monthEntry.toLocaleLowerCase()



if(month === 'february'){

    if(year%4 ===0 && year%100 ===0 && year%400===0){
        console.log('this is a leap year has 28 days');
    }
    else if(year%4 ===0 && year%100 !=0 && year%400 !=0){
        console.log('this is a leap year has 28 days');
    }
    else if(year%4 ===0 && year%100 ===0 && year%400 !=0){
        console.log('this is not a leap year has 29 days ');
    }

    else if(year%4 !==0){
        console.log("is not a leap year has 29 days");
    }
}
else if(month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december"){
    console.log('this month has 31 days');
}
else if(month === "april" || month === "june" || month === "september" || month === "november"){
    console.log('this month has 30 days');   
}
 
 

