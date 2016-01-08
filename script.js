<<<<<<< HEAD
console.log("Are you a boy or a girl?")
=======
// pokemon constructor function
function Pokemon(name, move){
  this.name = name;
  this.move = move;
  this.attack = function(){
    console.log(name + " used " + move + "! It's super effective!");
  };
}

// var pikachu = new Pokemon("Pikachu", "Thunderbolt");
// pikachu.attack();

function Person(name, age){
  this.name = name;
  this.age = age;
  this.money = 3000;
}

Person.prototype = {
  introduce: function(){
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old!");
  },
  challenge: function(){
    console.log(this.name + " wants to fight!");
  },
  win: function(){
    console.log(this.name + " won!");
    this.money += 100;
  },
  lose: function(){
    console.log(this.name + " lost!");
    this.money -= 100;
  }
};

var ash = new Person("Ash", 10);
ash.introduce();

var gary = new Person("Gary", 10);
gary.lose();
console.log(gary.money);
console.log(ash.money);
>>>>>>> 8464a8c08091cda9c413465c43536b35153d4009
