/*
	In my early experiences of learning about design patterns, I 
		personally found the following table a very useful reminder 
		of what a number of patterns has to offer - it covers the 
		23 Design Patterns mentioned by the GoF. The original table 
		was summarized by Elyse Nielsen back in 2004 and I've modified 
		it where necessary to suit our discussion in this section of the book.

	I recommend using this table as reference, but do remember that 
		there are a number of additional patterns that are not 
		mentioned here but will be discussed later in the book.
	
	A brief note on classes:
	=======================
	Keep in mind that there will be patterns in this table that 
		reference the concept of "classes". JavaScript is a 
		class-less language, however classes can be simulated using functions.

	The most common approach to achieving this is by defining a 
		JavaScript function where we then create an object using 
		the new keyword. this can be used to help define new 
		properties and methods for the object as follows:
*/
// A car "class"
function Car( model ) {
 
  this.model = model;
  this.color = "silver";
  this.year = "2012";
 
  this.getInfo = function () {
    return this.model + " " + this.year;
  };
}

//We can then instantiate the object using the Car constructor we defined above like this:
var myCar = new Car("ford");
myCar.year = "2010";
console.log( myCar.getInfo() );

/*
	For more ways to define "classes" using JavaScript, see Stoyan Stefanov's useful post on them.
	Let us now proceed to review the table.

	================================================================================================
		 Creational	  			Based on the concept of creating an object.
	    Class
	      Factory Method		- This makes an instance of several derived classes based on interfaced data or events.
	    Object
	      Abstract Factory		- Creates an instance of several families of classes without detailing concrete classes.
	      Builder				- Separates object construction from its representation, always creates the same type of object.
	      Prototype				- A fully initialized instance used for copying or cloning.
	      Singleton				- A class with only a single instance with global access points.
	
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 	 	 	 	 	 	 	 
	  Structural	  			Based on the idea of building blocks of objects.
	    Class
	      Adapter				- Match interfaces of different classes therefore classes can work together despite 
	      							incompatible interfaces.
	    Object
	      Adapter				- Match interfaces of different classes therefore classes can work together 
	      							despite incompatible interfaces.
	      Bridge				- Separates an object's interface from its implementation so the two 
	      							can vary independently.
	      Composite				- A structure of simple and composite objects which makes the total 
	      							object more than just the sum of its parts.
	      Decorator				- Dynamically add alternate processing to objects.
	      Facade				- A single class that hides the complexity of an entire subsystem.
	      Flyweight				- A fine-grained instance used for efficient sharing of information 
	      							that is contained elsewhere.
	      Proxy					- A place holder object representing the true object.
	
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
	  Behavioral	  			Based on the way objects play and work together.
	    Class
	      Interpreter			- A way to include language elements in an application to match the 
	      							grammar of the intended language.
	      Template
	       Method				- Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.
	    Object
	      Chain of
	      Responsibility		- A way of passing a request between a chain of objects to find the 
	      							object that can handle the request.
	      Command				- Encapsulate a command request as an object to enable, logging 
	      							and/or queuing of requests, and provides error-handling for unhandled requests.
	      Iterator				- Sequentially access the elements of a collection without knowing 
	      							the inner workings of the collection.
	      Mediator				- Defines simplified communication between classes to prevent a 
	      							group of classes from referring explicitly to each other.
	      Memento				- Capture an object's internal state to be able to restore it later.
	      Observer				- A way of notifying change to a number of classes to ensure 
	      							consistency between the classes.
	      State					- Alter an object's behavior when its state changes.
	      Strategy				- Encapsulates an algorithm inside a class separating the 
	      							selection from the implementation.
	      Visitor				- Adds a new operation to a class without changing the class.
	-------------------------------------------------------------------------------------------------------------------
*/
