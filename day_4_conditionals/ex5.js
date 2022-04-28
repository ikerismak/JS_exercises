// Write a code which can give grades to students according to theirs scores:


let score = prompt('enter the student score: ')

if(score < 100 && score > 80){
    console.log(`the estudent with ${score} have a A grade`)
}

else if(score < 89 && score > 70){
    console.log(`the estudent with ${score} have a B grade`)
}

else if(score < 69 && score > 60){
    console.log(`the estudent with ${score} have a C grade`)
}

else if(score < 59 && score > 50){
    console.log(`the estudent with ${score} have a D grade`)
}

else if(score < 49 && score > 0){
    console.log(`the estudent with ${score} have a F grade`)
}