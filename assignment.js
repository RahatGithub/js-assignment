
//Problem no.1
function kilometerToMeter(km){
    if(km > 0){
        var m = km * 1000;
        return m
    }
    else{
        return 'please enter a valid input';
    }
}

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question('Kilometer : ', km => {
    km = parseInt(km);
    var result = kilometerToMeter(km);
    console.log(result)
    readline.close()
  })
  




/*
function budgetCalculator(watches, phones, laptops){

}*/