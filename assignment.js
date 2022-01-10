

//******Problem no.1*******
function kilometerToMeter(km) {
    if (km > 0) {
        var m = km * 1000; //1 km = 100 m
        return m
    }
    else {
        return 'Enter a valid input'; //only accepts positive integers
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
        return 'Enter a valid input'; //negative value isn't accepted
    }
}

var watches = 14, phones = 12, laptops = 5;
budgetCalculator(watches, phones, laptops);



//******Problem no.3*******
function hotelCost(days){
    if(days<=10 && days>0){
        return days*100; //for first 10 days, per day cost is 100
    }
    else if(days>10 && days<=20){
        return 100*10 + (days-10)*80; //total cost = cost of first 10 days + cost of between 10 days and 20 days 
    }
    else if(days>20){
        return 100*10 + 80*10 + (days-20)*50; //total cost = cost of first 10 days + cost of second 10 days + cost after 20 days
    }
    else{
        return 'Enter a valid input'; //only accepts positive integers
    }
}



//******Problem no.4*******
function megaFriend(friends){
    var maxLen = friends[0].length, indexOfMax = 0; //set the initial values of first element's length and index
    for(var i=1; i<friends.length; i++){
        if(friends[i].length > maxLen){
            maxLen = friends[i].length;
            indexOfMax = i;
        }
    }
    var bestFriend = friends[indexOfMax];
    return bestFriend;
}

var friends = ['Saiful', 'Omor', 'Nafiz', 'Ashfak', 'Zubayer'];
megaFriend(friends);