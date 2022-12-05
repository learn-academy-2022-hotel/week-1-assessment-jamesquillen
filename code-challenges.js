// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Function Signature
// input: number
// output: determines if the given number is below boiling point, at boiling point, or above boiling point

// input: 42
// Expected output: "42 is below boiling point"

// input: 350
// Expected output: "350 is above boiling point"

// input: 212
// Expected output: "212 is at boiling point"

// Process
// create a function called boilingTest that takes a number arguement called temp
// if temp is less than boiling (212 degrees F) the function will return a console log message saying the temperature is less than boiling point
// if temp is more than boiling the function will return a console log message saying the temperatire is above boiling point
// if temp is equal to boiling the function will return a console log message saying the temperature is at boiling point
// if temp is anything else the function will return a message saying a number is needed for this function to work

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingTest = (temp) => {
    let boilingPoint = 212
    if (temp < boilingPoint) {
        return `${temp} is below boiling point`
    }   else if (temp > boilingPoint) {
        return `${temp} is above boilding point`
    }   else if (temp === boilingPoint) {
        return `${temp} is at boiling point`
    }   else {
        return `This function measures a given temperature's place relative to the boiling point of water. Please input any number.`
    }
}

// console.log(boilingTest(temp1))
// console.log(boilingTest(temp2))
// console.log(boilingTest(temp3))
// console.log(boilingTest("hello"))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Function Signature
// input: two separate arrays
// output: the length of both arrays combined

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Process
// create a function called combinedArrayCounter that takes two seperate arrays as arguements
// concatenate the two arrays together, then find the length of the new combined array
// display the length of the combined array in the console

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const combinedArrayCounter = (array1, array2) => {
    return array1.concat(array2).length
}

// console.log(combinedArrayCounter(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns));

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Function Signature
// input: a string
// output: the inputted string, reversed

// const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

// Process
// create a function called reverseString that takes a string as an argument
// use an accessor mothod to change the string to an array
// use a method to reverse the array
// use an accessor method to turn the array back into a string
// display the reversed string in the console

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

const reverseString = (inputString) => {
    return inputString.split("").reverse().join("")
}

// console.log(reverseString(currentCohort));

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Function Signature
// input: an array and a number
// output: the last index of the given value from the array

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8

// Process
// create a function called lastIndexFinder that takes an array and a number as an argument
// use an accessor to check if the inputted number is part of the array
// if the inputted number is part of the array, display the last index of the inputted number insdie the array in the console
// if the inputted number is not in the array, send a message to the console saying the given number is not present in the given array
// display the reversed string in the console

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndexFinder = (givenArray, givenValue) => {
    if (givenArray.includes(givenValue)) {
        return givenArray.lastIndexOf(givenValue)
    } else {
        return `${givenValue} is not present in the given array (${givenArray})`
    }
}

// console.log(lastIndexFinder(myNumbers, givenValue1));
// console.log(lastIndexFinder(myNumbers, givenValue2));
// console.log(lastIndexFinder(myNumbers, 3));

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Function Signature
// input: an array
// output: the inputted array, sorted from largest to smallest

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// Process
// create a function called arraySorter that sorts an inputted array from largest to smallest
// use the .sort method with the (a, b) => b - a) function to sort the array
// display the sorted array in the console

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const arraySorter = (array) => {
    return array.sort((a, b) => b - a)
}

// console.log(arraySorter(sanDiegoSummerTemperatures));
// console.log(arraySorter(sanDiegoWinterTemperatures));
