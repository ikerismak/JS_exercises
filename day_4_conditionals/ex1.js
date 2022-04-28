
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18

const age = prompt('enter your age: ')


if(age > 18){
    console.log('you are old enough to drive');

}

if (age < 18){
    let agesLeft = 18 - age

    console.log(`you are left with ${agesLeft} years to drive`);
}