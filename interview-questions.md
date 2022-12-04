# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: 

Git and GitHub are two separate but closely related technologies that allow asynchronous remote programming. Git is a version control system (VCS) which allows for extremely fine-tuned control of making and tracking changes to one or multiple files, or combinations of files called repositories. It is like Microsoft Word's "track changes" but on steroids. While git is the locally installed software that does the heavy lifting of keeping track of changes made to files and branches of repositories, GitHub is a central, web-based location where repositories can be hosted by organizations, cloned by other GitHub members, and reviewed for merging and commenting. Git is like a car while GitHub is like a highway. They can both exist separately, but they're much more useful together. 

Researched answer: 

Git is a open-source Distributed Version Control System (DVCS) created by Linus Torvalds (the creator of Linux) in 2005. A DVCS allows developers (from one to millions) to manage files and code in a remote, decentralized way. Git acts as a special type of database that tracks every single modification of code in every file on a given project. In it basic form, git is used a command line interface and does not offer an organic graphical user intferface. The program is executed by text commands in a terminal. Repositories, the umbrella container for a project, contains a main branch for production, while developers can create as many development branches as necessary to work on specific sections or features of a project. With git, what developers change in one branch will not affect changes developers make on a second branch. This workflow allows for more accurate, more secure, and faster project development. 

GitHub is a cloud-based, website that hosts git repositories and offers a graphical way to manage git-based projects. GitHub was founded in 2008 and is owned by MicroSoft. GitHub uses a graphical user interface (GUI) that allows for more familair navigation for most users than the terminal. GitHub is extremely useful for managing git repositories and the workflows they represent. While developers can work on their projects on local computers, GitHub allows for cloud-hosted repositories accessible anywhere with an internet connection. Memberships and permissions allow for control over who has access to what reposository. By hosting internet accessible repositories, developers can see who has made what changes to files and when. As developers work on their own branches, with the ultimate goal of having those branches become part of the main production branch, a process called a pull request (PR) begins. The PR lets more senior developers know a branch is ready to be pulled into the main branch. Once the PR is reviewed, the changes made in the branch can be merged into the main branch, or next higher development branch, and become part of the main branch. GitHub also offers more features than the basic git such as blogs, wikis, and extensions.

2. Which JavaScript operators will return a Boolean value?

Your answer: 

Comparison and Logical operators will return Boolean values. Comparison operators compare two values and determine if the results are true or false. Greater than (>) is an example of a Comparison operator. In the statement "6 > 10", the greater than operator tests to see if what is presented is true or fales. Because 6 is not greater than 10, this statement will result in a condition of being "false". Logical operators return Boolean values because they are looking to find the result of two or more comparison operators.

Researched answer: 

I would keep the first part of my answer and add some more detail on the logical operators: Logical operators combine two or more comparison statements and result in a Boolean value. For example, the AND (&&) operator compares two comparison statements. If both comparison statements are true, the logical statement is true. If one or both of the comparison statements are false, the logical statement is false. The OR (||) operator differse from the AND operator in that if at least one conditional statement is true, the overall logical statement will return as true. If both comparison statements are false, the overall logical statement will also be false.

3. What is an index? What is the difference between index and value?

Your answer: 

An index is a location, or pointer, to a specific location in a string or an array. Indexes start at position 0 and proceed to the right of a string or an array for as many items are in the string or array. Values are the representation of certain objects such as variables or single data types themselves, like numbers. A number can be its own value while adding two numerical values can create a sum of those values, which is a value itself. Variables can be assigned values as well. A variable can be declared and assigned to a date type or function, amont other things. The value of that variable is not whatever was assigned to it.

Researched answer: 

Indexes are read-only properties that contain the position of a regular expression match within a string or the position of an object in an array. Indexes are like a glossary. They mark where a character or object is within a string or array. Indexes start with 0 and proceed to as many characters or objects exist in the string or array. Values are the lowest form of data in Javascript. Data types and variables are created with values. Some data types are values themselves, such as the number data type being a value of the number itself. Variables represent any value assigned to them. Arrays can hold many values in a single object. While a string is a data type, the value of the string are the characters making up that string.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: 

Strings are as small as single characters or as long as novels, but they are alwasy surrounded by quotation marks. Anything can go between quotation marks and thus become a string. Something cannot be a string if it is not inside quotation marks. Arrays are similar to lists. Arrays can hold from zero to incredibly large numbers of items wihin them. Each item in an array can be unique. Any data type can occupy a space in an array. Arrays can also contain other arrays as some or all of their items. Strings and arrays have some characteristics in common. A major similarity between strings and arrays are there index systems. With both strings and arrays, one can access certain parts of each by referencing the index, or location, or characters or items within them. Referencing the first index position (0) or both a string and an array will display the first chcracter in a string or the first item in an array. A major difference between strings and arrays are the methods avaialable to each. Many methods available for strings is not available to arrays and vice verson. For example, the .toUpperCase() method is only available to strings, as trying to make elements of arrays upper case wouldn't make sense, logically. On the other hand, .sort() is only available to arrays, and not to strings. Fortunately, other mothods like .join() and .split() exist and allow one to convert strings into arrays and arrays into strings.

Researched answer: 

A string is an object used to represent and manipulate a sequence of characters. An array is an object that enables storing a collection of multiple items under a single variable name. Strings are different object types but they do share some similarities. For example, the .length property is accessible in both strings and arrays. While a string.length outputs the number of characters in a string (including spaces), the array.length property displays how many objects are contained within the array. String and array value may also be accessed in a similar way. Strings and arrays are both zero-index based. Calling for string[0] will return the first character in the string while array[0] will return the first object in the array. Strings and arrays can be loosely compared to one another and return true as long as they contain the same values in the same order of their indexes. On the other hand, strings and arrays are used for different purposes and have different methods available to them. Strings are simpler than arrays and have methods that can be used to modify the contents of the string in certain ways. For example, .toUpperCase() will transform the characters of a strong to all upper case letters, if they exist within the string. An array could not use this method because the objects in an array can be any datatype and you cannot tranform a datatype itself to upper case, even if the data type is a string within the array. Similarly, arrays have methods that are not accessible to strings. For example, the .reverse() method is available to arrays but not to strings. While the limitations exist, methods available to each object allow one to change a string to an array and vice versa, use the methods only avilable to that specific object, then change the object back to the desired type.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: 

Pair programming is a method of programming using two people in two separate, but defined, roles. The two roles in pair programming are the driver and the navigator. The driver has their hands on the keyboard and it is their responsibility to do the physical action of writing code to the text editor. The navigator's responsibility is to keep looking out at the big picture, keeping the driver on task and watching for typos and syntax errors. The system of checks and balances affords for fewer mistakes, better accuracy, and increased output. Two heads are usually better than one, and pair programming capitalizes on this idea. A pair stands a much greater chance of getting through a challenging coding problem than a single developer. With specific roles, each person can focus on their job but also provide support to the other when needed. 

Researched answer: 

Pair programming is an agile software development technique where two developers work on a single workstation. Pair programming can be remote or in-person. If in-person both developers sit with each other at a single computer. If remote, one developer shares their screen with the other. There are two distinct roles in pair programming: the driver and the navigator. The driver's responsibility is to do the physical coding by typing lines into the text editor. While the driver is doing the typing, the navigator's responsibility is to be thinking about the code as a part of the whole of the greater project, catch errors, and think through more effective/efficient ways to code. While the driver is free to code as they see fit, the navigator should be constantly guiding the driver in the right direction. Pair programming can be productive or counterproductive, depending on certain variables. With the right combination of experience, the driver and navigator can significant improvements in productivity. The driver and navigator can collaborate, share different perspectives on the task at hand, suggest new strategies, and give information that the other partner is not familair with. If, however, paired developers vary siginificantly in their experience, or both developers are too inexperienced to help one another, pair program can end up having a net negative effect.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:

While normal functions can be assigned to variables or called anonymously, higher order functions are functions that accept functions as parameters and/or return a function. Almost any function could be or become a higher order function. A higher order function can do siginificantly more work and out put more results than a typical function. Some methods within Javascript are themselves higher order function. Examples of these are the .reduce(), .forEach(), .filter(), and .map() methods. This methods perform certain actions on arrays, but take functions as arguments.

2. Jest:

Jest is a Javascript testing frameworkf that allows elements of software, from the smallest unit to an entire program, to be tested for functionality and conflicts. Testing can help identify bugs or unexpected behavoir at anytime in the development process, although testing early could prevent problems from occuring before they arise. At the lowest level, called the unit test, Jest can test to see if a function or method behaves as expected. Integration tests make sure units can work with each other successfully. Finally, end-to-end tests check an entire program to make sure all of the working parts are working correctly.

3. Objects:

Objects are variables that can contain many values. Objects have both properties and methods. Properties are futher broken down into name:value pairs, where the name identifies the property itself and the value identifies the value identifies the property for that specific object. Once created, properties of an object can be accessed by using dot notation or bracket notation. Methods can also be created for objects which are stored as a property of the object. These methods can perform functions on the object itself.

4. Method:

Methods are actions that can be performed on objects. Methods are functions within an object. Methods can be created independentlymfor an object or can be built-in organically by Javascript. Methods can modify or manipulte objects depending on how they are used.

5. Classes:

Classes are templates for JavaScript objects. Classes are like blueprints for objects. Once a class is created an unlimited number of objects may be created based off the class. This saves an enormous amount of time as objects and their properties/methods do not all have to be built one by one.