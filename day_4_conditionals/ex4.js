// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


let number = prompt("enter a number please:   ")


if(number%2 === 0){

    console.log(`${number} is an even number`);
}

else{
    console.log(`${number} is an odd number`);
}