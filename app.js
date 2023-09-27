//ES05 example 1
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   };

//My refactor
const createInstructor = (firstName, lastName) => ({firstName, lastName})

//================================////================================////================================//

//ES05 example 2
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//My refactor
const favoriteNumber = 42;
const instructor1 = {
    [favoriteNumber]: 'that is my favorite!'
};

//================================////================================////================================//

//ES05 example 3

// var instructor2 = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

//my refactor
const instructor2 = {
    firstName: 'Matt',
    sayHi(){
        return 'Hello!';
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
};

//================================////================================////================================//

// Write a function which generates an animal object. 
// The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

const createAnimal = function(species, verb, noise){
    return {
        species, [verb](){
            console.log(noise)
        }
    }
}