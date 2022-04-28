// Check if a day is weekend day or a working day. Your script will take day as an input.


let dayentry = prompt('What is the day today? ')
let day = dayentry.toLocaleLowerCase()

switch(day){

    case 'saturday':
        console.log(`${dayentry} is a weekend`);
        break
    case 'sunday':
        console.log(`${dayentry} is a weekend`);
        break
    case 'monday':
        console.log(`${dayentry} is a working day`);
        break
    case 'tuesday':
        console.log(`${dayentry} is a working day`);
        break
    case 'wednesday':
        console.log(`${dayentry} is a working day`);
        break
    case 'thursday':
        console.log(`${dayentry} is a working day`);
        break
    case 'friday':
        console.log(`${dayentry} is a working day`);
        break
    default:
        console.log("is not a valid day");
}