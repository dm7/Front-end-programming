/*
Introduction
============

Traditional JavaScript uses functions and prototype-based inheritance to build
up reusable components, but this may feel a bit awkward to programmers more
comfortable with an object-oriented approach, where classes inherit functionality
and objects are built from these classes. Starting with ECMAScript 2015, also
known as ECMAScript 6, JavaScript programmers will be able to build their
applications using this object-oriented class-based approach. In TypeScript,
we allow developers to use these techniques now, and compile them down to
JavaScript that works across all major browsers and platforms, without having
to wait for the next version of JavaScript.
*/


class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet(){
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

/*
  The syntax should look familiar if you’ve used C# or Java before.
  We declare a new class "Greeter". This class has three members: a
  property called "greeting", a constructor, and a method "greet".

  You’ll notice that in the class when we refer to one of the members
  of the class we prepend "this". This denotes that it’s a member access.

  In the last line we construct an instance of the "Greeter" class using "new".
  This calls into the constructor we defined earlier, creating a new object
  with the "Greeter" shape, and running the constructor to initialize it.
*/

/*
  Inheritance
  In TypeScript, we can use common object-oriented patterns. Of course, one
  of the most fundamental patterns in class-based programming is being able
  to extend existing classes to create new ones using inheritance.

  Let’s take a look at an example:
  class Animal {
      move(distanceInMeters: number = 0) {
          console.log(`Animal moved ${distanceInMeters}m.`);
        }
  }

  class Dog extends Animal {
      bark() {
          console.log('Woof! Woof!');
        }
  }

  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();

  This example show the most basic inheritance feature: classes inherit
  properties and methods from base classes. Here, Dog is a derived class that
  derives from the Animal base class using the extends keyword. Derived classes
  are often called subclasses, and base classes are often called superclasses.

  Because Dog extends the functionality from Animal, we were able to create an
  instance of Dog that could both bark() and move().

  Let’s now look at a more complex example.
*/

/*
    class Animal{
      name: string;
      constructor(theName: string){ this.name = theName; }
      move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m`);
      }
    }

    class Snake extends Animal{
      constructor(name: string){ super(name); }
      move(distanceInMeters = 5){
        console.log("Slithering ... ");
        super.move(distanceInMeters);
      }
    }

    class Horse extends Animal{
      constructor(name: string){ super(name); }
      move(distanceInMeters = 45){
        console.log("Galloping ...");
        super.move(distanceInMeters);
      }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
*/

/*
  This example covers a few other features we didn’t previously mention.
  Again, we see the extends keywords used to create two new subclasses of
  "Animal"": "Horse" and "Snake".

  One difference from the prior example is that each derived class that
  contains a constructor function must call "super()" which will execute the
  constructor of the base class. What’s more, before we ever access a property
  on "this" in a constructor body, we have to call "super()"". This is an
  important rule that TypeScript will enforce.

  The example also shows how to override methods in the base class with methods
  that are specialized for the subclass. Here both "Snake" and "Horse" create
  a "move" method that overrides the "move" from "Animal", giving it functionality
  specific to each class. Note that even though "tom" is declared as an "Animal",
  since its value is a "Horse", calling "tom.move(34)" will call the overriding
  method in "Horse":

  Output:
  Slithering...
  Sammy the Python moved 5m.
  Galloping...
  Tommy the Palomino moved 34m.
*/

/*
Public, private, and protected modifiers:
========================================

/*

/*
Public by default

In our examples, we’ve been able to freely access the members that we declared
throughout our programs. If you’re familiar with classes in other languages,
you may have noticed in the above examples we haven’t had to use the word
"public" to accomplish this; for instance, C# requires that each member be
explicitly labeled "public" to be visible. In TypeScript, each member is
"public" by default.

You may still mark a member "public" explicitly. We could have written the
"Animal" class from the previous section in the following way:
*/

class Animal{
  public name: string;
  public constructor(theName: string){ this.name = theName; }
  public move(distanceInMeters: number){
    console.log(`${this.name} moved ${distanceInMeters}m`);
  }
}

/*
  Understanding private

  When a member is marked "private", it cannot be accessed from outside of its
  containing class. For example:

*/

interface Named{
  x:string;
}

class Animal implements Named{
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;

/*

https://www.typescriptlang.org/docs/handbook/classes.html



*/
