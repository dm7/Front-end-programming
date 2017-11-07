/* Classes */
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
   of the class we prepend this.. This denotes that it’s a member access.

  In the last line we construct an instance of the Greeter class using new.
  This calls into the constructor we defined earlier, creating a new object
  with the Greeter shape, and running the constructor to initialize it.
*/

/*
  Inheritance
  In TypeScript, we can use common object-oriented patterns. Of course, one
  of the most fundamental patterns in class-based programming is being able
  to extend existing classes to create new ones using inheritance.

  Let’s take a look at an example:
*/
/*
class Animal{
  name: string;
  constructor(theName: string){ this.name = theName; }
  move(distanceInMeters: number = 0){
    console.log('${this.name} moved ${distanceInMeters}m');
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
  This example covers quite a few of the inheritance features in TypeScript
  that are common to other languages. Here we see the extends keywords used
  to create a subclass. You can see this where Horse and Snake subclass the
  base class Animal and gain access to its features.

  Derived classes that contain constructor functions must call super() which
  will execute the constructor function on the base class.

  The example also shows how to override methods in the base class with methods
  that are specialized for the subclass. Here both Snake and Horse create a
  move method that overrides the move from Animal, giving it functionality
  specific to each class. Note that even though tom is declared as an Animal,
  since its value is a Horse, when tom.move(34) calls the overriding method
  in Horse:

  Output:
  Slithering...
  Sammy the Python moved 5m.
  Galloping...
  Tommy the Palomino moved 34m.
*/

/*
Public, private, and protected modifiers
Public by default

In our examples, we’ve been able to freely access the members that we declared
throughout our programs. If you’re familiar with classes in other languages,
you may have noticed in the above examples we haven’t had to use the word
public to accomplish this; for instance, C# requires that each member be
explicitly labeled public to be visible. In TypeScript, each member is
public by default.

You may still mark a member public explicitly. We could have written the
Animal class from the previous section in the following way:
*/
class Animal{
  public name: string;
  public constructor(theName: string){ this.name = theName; }
  public move(distanceInMeters: number = 0){
    console.log('${this.name} moved ${distanceInMeters}m');
  }
}

/*
  Understanding private

  When a member is marked private, it cannot be accessed from outside of its
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
