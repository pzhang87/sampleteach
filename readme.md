# Object Oriented Javascript: Constructors and Prototypes

## Learning Objectives

* compare and contrast OOP in Ruby and Javascript
* learn to use constructor functions to create objects in JS
* understand prototypes and how to attach methods to an object via the `prototype` property

## Framing: Object Oriented Programming Review

* What is an object?
* Why do we use the OOP paradigm? What benefits does it provide us?

An object is a self-contained entity that consists of both data and procedures to manipulate that data. In a nutshell, object-oriented programming lets us model data as nouns, and their associated behaviors as verbs. It's an intuitive way for programmers to structure code.

## Review: Objects in Ruby and JS

Let's recall in Ruby how we made objects at a high level.

<!-- I am looking for a couple of keywords here: class and instance-->

```ruby
class Person
  def initialize (name, age)
    @name = name
    @age = age
  end
  def introduce
    puts "Hi, I'm #{@name}, and I'm #{@age} years old!"
  end
end

ash = new Person("Ash", 10)
ash.introduce # "Hi, I'm Ash, and I'm 10 years old!"
```

And now - in Javascript, let's make an object:

```js
var object = {}
```
<!-- Welcome back to Javascript!  How JS treats objects can feel very cavalier after spending time with class-oriented languages like Ruby.-->

...no, but really:

```js
var ash = {
  name: "Ash",
  age: "10",
  introduce: function(){
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + "years old!")
  }
}

ash.introduce(); // "Hi, I'm Ash, and I'm 10 years old!"
```

## Making Object*s* in JS

While we were learning Ruby, we often made the analogy that classes are the 'blueprints' for an object, and the instances are individual occurrences of that object. Instantiating multiple objects is as simple as calling the class function as many times as you need to. But, Javascript doesn't have classes!

Hard-coding each individual object that we want would be fairly inefficient. Instead, let's create a function that takes arguments `name` and `age` and creates a new Person object for us.

We should end up with something like this:

```js
var makePerson = function(name, age){
  newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  newPerson.introduce = function(){
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + "years old!")
  }
  return newPerson;
}

var ash = makePerson("Ash", "10");
ash.introduce(); //"Hi, I'm Ash, and I'm 10 years old!"
```

Seems fairly reasonable so far, but there's actually a better way to do this...

## Constructor Functions - I DO

In JS, we use Constructor Functions to accomplish similar results. I'll build our first Constructor function here...

```js
function Person(name, age){
  this.name = name;
  this.age = age;
  this.introduce = function(){
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old!");
  };
}

var ash = new Person("Ash", 10);
ash.introduce();
```

A few things to note here:

1. The capital P in `Person`. This is a convention to indicate that you're using a constructor function to create objects, much like how you'd do the same in Ruby with class names.
2. The words `this` and `new`. How does the constructor function know what `this` is? It's because in using the word `new` before the function, JS knows to create a new empty object, set it as the target of `this`, and return the object once it's done.
3. I said this wasn't creating a class, but it sure awfully looks similar! That is the point of why this syntax exists, but under the hood, Javascript is doing something slightly different - which we'll get into a bit later.

### Write a Constructor Function - WE DO

Let's write a constructor function for a Pokemon that takes two arguments `name` and `move`, and has a method `attack` that prints what move the Pokemon used to the console. Then, call it to create a new Pokemon. (If you don't know/can't remember anything about Pokemon, `Pikachu` knows to use `Thundershock` at Level 1.)

```js
function Pokemon(name, move){

  //code here...

}
```

<!-- Remember to console.log('It's super effective!') -->

## Prototypes

Each time we call `new Person`, our constructor function creates a new object with all of the attributes we defined. But, given that there's common behavior across these objects, we can further abstract some of this code out of our constructor function. Enter the `prototype` property:


```js
function Pokemon(name, move){
  this.name = name;
  this.move = move;
}

Pokemon.prototype.attack = function(){
  console.log(name + " used " + move + "! It's super effective!");
};

var pikachu = new Pokemon("Pikachu", "Thunderbolt");
pikachu.attack();
```

What's actually going on here? There are actually a couple more things that we didn't mention when we talked about invoking the constructor function.

In Javascript, each object has a `prototype` property that references another object - and along with it come associated methods and behaviors. When we created the `pikachu` object by invoking `new Pokemon`, we also assigned it all the properties and methods that were found on `Person.prototype`. Whenever we tell Pikachu to attack, the object looks for the property on the `pikachu` object - and if it can't find it, it'll go to the prototype to see if it's there instead.

### Refactor our Person Constructor via the Prototype Property - YOU DO

In the world of Pokemon, people challenge each other to Pokemon battles all the time. Rewrite our Person constructor using the `prototype` property so that the Person can also `challenge`, `win`, and `lose`, each with its' own console.log statement.

BONUS: Add a `money` property, and write the logic for the person to win or lose money in each corresponding method.

## Further Discussion

* Avoid assigning static properties to the prototype!
* The `__proto__` property
* Prototypal inheritance in JS
