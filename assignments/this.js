/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of "this" will be the window/console Object.
* 2. When a function is called by a preceding dot, the object left of the dot gets 'this'.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript's call or apply method is used, this is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var sayAge = function(){
    console.log(this.age);
  };
  
  sayAge(35);
  window.age = 35
  sayAge();
  
// Principle 2

// code example for Implicit Binding

var Person = function(name,age){
    return {
      name: name,
      age: age,
      sayName: function(){
        console.log(this.name);
      },
      sister: {
        name: 'Hong',
        sayName: function(){
          console.log(this.name);
        }
      }
    }

  };
  
  var jay = Person('Jay',19);
  jay.sayName();
  jay.sister.sayName();

// Principle 3

// code example for New Binding

var Understand = function(principle1, principle2, principle3){
    this.binding1 = principle1;
    this.binding2 = principle2;
    this.binding3 = principle3;
  };
  
  var lesson = new Understand('Implicit', 'Explicit', 'Global');
  console.log(lesson);

// Principle 4

// code example for Explicit Binding

var intro = function(hob1,hob2){
    console.log(this.name + ' is ' + this.age + ' and ' + this.name + ' likes '+ hob1 + ' & ' + hob2 + '.')
  };
  
  var Hong = {
    name: 'Hong',
    age:25
  };
  
  var Jay = {
    name: 'Jay',
    age: 23
  };
  
  var hobbies1 = ['running','coding'];
  var hobbies2 = ['reading','baking']
  
  intro.call(Hong,hobbies1[0],hobbies1[1]);
  intro.call(Jay,hobbies2[0],hobbies2[1]);
  intro.apply(Hong,hobbies1);
  intro.apply(Jay,hobbies2);