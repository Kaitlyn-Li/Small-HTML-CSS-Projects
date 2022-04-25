//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.



// let calculator = {
//     // ... your code ...
//     read() {
//         this.value1 = +prompt("Please Enter a Value"); //using the + sign in front of prompt will coerce the string from input to number
//         this.value2 = +prompt("Please Enter Another Value") //using the + sign in front of prompt will coerce the string from input to number
//     },
//     sum() {
//         return this.value1 + this.value2;
//     },

//     mul() {
//         return this.value1 * this.value2;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

//Chaining
//importance: 2
//There’s a ladder object that allows to go up and down:

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this; //added so that once chained, calling this method will return the step which another method will be able to act on; returning will enable us to reference the object again and again
//     },
//     down() {
//       this.step--;
//       return this; //added so that once chained, calling this method will return the step which another method will be able to act on; returning will enable us to reference the object again and again
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this; //added so that once chained, calling this method will return the step which another method will be able to act on; returning will enable us to reference the object again and again
//     }
//   };

//   //Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// //Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// //We also can write a single call per line. For long chains it’s more readable:

// ladder
//   .up()
//   .up()
//   .down()
//   .showStep() // 1
//   .down()
//   .showStep(); // 0


//Two functions – one object
//Is it possible to create functions A and B so that new A() == new B()? Yes. 
// function A() { 
//     return obj;
//     }
// function B() { 
//     return obj;
//     }

// let a = new A;
// let b = new B;

// let obj = {}

// alert( a == b ); // true
// //If it is, then provide an example of their code.


//Create new Calculator
//Create a constructor function Calculator that creates objects with 3 methods:

//read() asks for two values using prompt and remembers them in object properties.
//sum() returns the sum of these properties.
//mul() returns the multiplication product of these properties.
//For instance:

// function Calculator() {
//     this.read = function (){
//         this.value1 = +prompt("Enter a number");
//         this.value2 = +prompt("Enter a number");
//     };

//     this.sum = function() {
//         return this.value1 + this.value2;
//     }

//     this.mul = function() {
//         return this.value1 * this.value2;
//     }
// }


// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


//Create new Accumulator
//Create a constructor function Accumulator(startingValue).

//Object that it creates should:

//Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//The read() method should use prompt to read a new number and add it to value.
//In other words, the value property is the sum of all user-entered values with the initial value startingValue.

//Here’s the demo of the code:

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt("Enter a number");
//     }
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

//Word info
//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

// function wordInfo () {
//     let input = prompt("Please Enter a Word.")
//     console.log(`${input} has ${input.length} characters.`)
//     console.log(`Lowever case of ${input} is ${input.toLowerCase()}`)
//     console.log(`Upper case of ${input} is ${input.toUpperCase()}`)
//     let count = 0;
//     for (const letter of input) {
//         if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
//             count++;
//         }
//     }
//     console.log(`${input} has ${count} vowels.`)
//     let reversed = Array.from(input).reverse().join("")
//     console.log(`${reversed} is the reverse of ${input}`)
//     console.log(`${input} ${isPalindrome(input)}`)
// }

// function isPalindrome(str) {
//     let reversed =  Array.from(str.toLowerCase()).reverse().join("");
//     if (str.toLowerCase === reversed) {
//         return "is a Palindrome."
//     } else {
//         return "is not a Palindrome."
//     }
// }

// wordInfo ()

//Vowel count
//Improve the previous program so that it also shows the number of vowels inside the word.

//Backwards word
//Improve the previous program so that it shows the word written backwards.

//Palindrome
//Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, 
//ignoring punctuation, case, and spacing.

//Dogs
//Complete the following program to add the definition of the Dog class.
//Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

// class Dog {
//     constructor(name,species,size){
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }

//     bark() {
//         if(this.size > 60) {
//             return "Grrr! Grrr!"
//         } else {
//             return "Woof! Woof!"
//         }
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//Character inventory
//Improve the example RPG to add character inventory management according to the following rules:
//A character's inventory contains a number of gold and a number of keys.
//Each character begins with 10 gold and 1 key.
//The character description must show the inventory state.
//When a character slays another character, the victim's inventory goes to its vanquisher.

// class Character {
//     constructor(name, health, strength, gold, key) {
//       this.name = name;
//       this.health = health;
//       this.strength = strength;
//       this.xp = 0; // XP is always zero for new characters
//       this.gold = gold;
//       this.key = key;
//     }
//     // Attack a target
//     attack(target) {
//       if (this.health > 0) {
//         const damage = this.strength;
//         console.log(
//           `${this.name} attacks ${target.name} and causes ${damage} damage points`
//         );
//         target.health -= damage;
//         if (target.health > 0) {
//           console.log(`${target.name} has ${target.health} health points left`);
//         } else {
//           target.health = 0;
//           const bonusXP = 10;
//           console.log(
//             `${this
//               .name} eliminated ${target.name} and wins ${bonusXP} experience points`
//           );
//           this.xp += bonusXP;
//           this.gold += target.gold;
//           target.gold = 0;
//           this.key += target.key;
//           target.key = 0;
//         }
//       } else {
//         console.log(`${this.name} can't attack (they've been eliminated)`);
        
//       }
//     }
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength, ${this.xp} XP points. ${this.gold} gold and ${this.key} key(s)`;
//     }
//   }

// const aurora = new Character("Aurora", 150, 25, 10, 1);
// const glacius = new Character("Glacius", 130, 30, 10, 1);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20, 10, 1);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

//Account list
//Let's build upon a previous account object exercise. A bank account is still defined by:

//A name property.
//A balance property, initially set to 0.
//A credit method adding the value passed as an argument to the account balance.
//A describe method returning the account description.
//Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
//These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }

//     credit(value) {
//         this.balance += value;
//     }

//     describe() {
//         console.log(`owner: ${this.name}, balance: ${this.balance}`)
//     }
// }

// const sean = new BankAccount("Sean", 0);
// const brad = new BankAccount("Brad", 0);
// const georges = new BankAccount("Georges", 0);
// sean.credit(1000);
// brad.credit(1000);
// georges.credit(1000);

// sean.describe();
// brad.describe();
// georges.describe();



// function duplicateEncode(word){
//     let result = [];
//     word = word.toLowerCase()
//     word.split("").forEach((item,index) => {
//         if (index === word.length - 1) {
//             if(word.slice(0, index).includes(word[index])) {
//                 result.push(")")
//             } else {
//                 result.push("("); 
//             }
//         } else if (index < word.length - 1) {
//         if(word.slice(index + 1).includes(item) || word.slice(0, index).includes(item)) {
//             result.push(")")
//         } else {
//             result.push("(")
//         }
//     }
//     })
//     return result.join("");
// }

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }


// function duplicateEncode(word){
//     let map = {};
//     let characters = word.toLowerCase().split('');
    
//     characters.forEach(char => {
//       map[char] = map[char] ? ')' : '(';
//     });
    
//     return characters.map(char => map[char]).join('');
// }


// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"))

// function pipeFix(numbers){
//     let result = [];
//     for (let i = 0; i < numbers.length; i++) {
//         while (numbers[i+1] > numbers[i]) {
//             result.push(numbers[i]++);
//         }
        
//     }
//     result.push(numbers[numbers.length-1])
//     return result;
//   }

// function pipeFix(numbers){
//     const first = numbers[0];
//     const last = numbers.slice(-1);
//     const result = [];
//     for (let i = first; i <= last; i++) {
//         result.push(i);
//     }
//     return result;
// }


  
//   console.log(pipeFix([1,3,5,6,7,8]))
//   console.log(pipeFix([1,2,3,12]))


// function toFreud(string) {
//     if (string === "") return ""; 
//     else {
//     let result = string.split(" ").map(item => item = "sex").join(" ");  
//    return result;
//    }
//      }

// function firstNonConsecutive (arr) {
//   let result = 0;
//    arr.map((item,index) => {
//        if (arr[index + 1] - arr[index] <= 1)
//        result = null;
//        if ((arr[index + 1] - arr[index] > 1))
//            result = arr[index + 1];
//     })
//     return result;
// }
