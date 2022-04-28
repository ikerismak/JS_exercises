// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.



const myAge = 25

const yourAge = prompt("Enter your age: ")


if(yourAge > myAge){

    let diference = yourAge - myAge

    console.log(`You are ${diference} older than me`)
}


else{

    let diference2 = myAge - yourAge

    console.log(`im ${diference2} older than you`)
}



