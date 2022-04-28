// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :


let monthUp = prompt('enter de month and i return to you the season: ')

let month = monthUp.toLocaleLowerCase()



    if(month === 'september' || month === 'november' ||  month === 'october'){
        
        console.log("The season is Autum");
 
    } 

    else if(month === 'december' || month ==='january' || month ==='February'){
        console.log("The season is Winter");
    } 
        
      

    else if( month === 'march' || month === 'april' || month === 'may'){
        console.log("The season is Spring");
    } 
 


    else if(month === 'june' || month ==='july' || month === 'august'){

        console.log("The season is Spring");
    } 
        
     

    else{
         console.log(`${month}  is not a valid month`);
        }
       
    
