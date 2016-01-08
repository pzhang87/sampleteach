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
