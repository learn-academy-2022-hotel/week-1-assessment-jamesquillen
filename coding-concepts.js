// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:
// It worked as expected. The .length method returns the length (total number) of characters in a string, including spaces. 
// The .length method can also be used for arrays, but it will give the total number of objects, not included the number of characters within the objects.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain:
// It worked as expected. Strings do have indexes like arrays, so sometimes behavior is common between strings and arrays.
// Calling for an index within a string will result in the character at that index being displayed.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain:
// It worked as expected. Passing an index number after an array's name will result in output of the array object at the requested index.
// Because the index constant here is 1, the result is the second object in the array. In this case "Ruby" is at index position 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain:
// This did not work as expected. The .toUpperCase method does not work for objects in arrays. 
// For this to work as I expected it to, I would need to convert the array to a string and then run the .toUpperCase method on the resulting string.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain:
// This did not work as expected. I first thought the result would be the count of the datatypes in the array.
// After seeing the result (number) it makes sense because the length of the array is 4, and 4 has a data type of number.
