function Pokemon(name, move){
  this.name = name;
  this.move = move;
  this.attack = function(){
    console.log(name + " used " + move + "! It's super effective!")
  };
}

var pikachu = new Pokemon("Pikachu", "Thundershock")
pikachu.attack();
