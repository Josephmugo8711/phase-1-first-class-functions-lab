// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//Declare the variable returnFirstTwoDrivers with const and 
//assign an anonymous function to it. The assigned function should 
//accept an array of 
//drivers as an argument and return the first two drivers in the array.
//Function expression
//allows us to create an anonymous function which doesn't have any function name 
//The slice() method returns selected elements in an array, as a new array
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and 
//end represent the index of items in that array.
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(){
    //should return an array of the last two drivers
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

//selectingDrivers — This is an array containing two elements:
// the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and 
//returns a function that will multiply a fare for a ride accordingly. 
//For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(number) {
    return function (fareMultiplier) {
        return fareMultiplier * number
    }
}
//fareDoubler() — Declare a variable with const and assign a function returned by 
//createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() 
//function accepts a fare as its lone argument and doubles it.

const fareDoubler = function(fareMultiplier){
    return createFareMultiplier(2)(fareMultiplier)
}

//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() 
//function accepts a fare as its lone argument and triples it.
const fareTripler = function(fareMultiplier){
    return createFareMultiplier(3)(fareMultiplier)
}
//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will
// return either the first two drivers or the last two drivers.

function selectDifferentDrivers(arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers)
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)




