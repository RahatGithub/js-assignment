

//******Problem no.1*******
function kilometerToMeter(km) {
    if (km > 0) {
        var m = km * 1000;
        return m
    }
    else {
        return 'Enter a valid input';
    }
}

var km = 14;
kilometerToMeter(km);



//******Problem no.2*******
function budgetCalculator(watches, phones, laptops) {
    if (watches >= 0 && phones >= 0 && laptops >= 0) {
        var totalCost = 0;
        totalCost += (watches * 50 + phones * 100 + laptops * 500)
        return totalCost;
    }
    else{
        return 'Enter a valid input';
    }
}

var watches = 14, phones = 12, laptops = 5;
budgetCalculator(watches, phones, laptops);






