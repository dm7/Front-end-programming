/* https://www.typescriptlang.org/docs/handbook/interfaces.html */

/*
  Introduction
  ============

  One of TypeScript’s core principles is that type-checking focuses on the
  shape that values have. This is sometimes called “duck typing” or “structural
  subtyping”.

  Duck Typing requires that type checking is deferred to runtime, and is
  implemented by means of dynamic typing or reflection.
  Duck typing is concerned with establishing the suitability of an object for
  some purpose. With normal typing, suitability is assumed to be determined by
  an object’s type only. In duck typing, an object’s suitability is determined
  by the presence of certain methods and properties (with appropriate meaning),
  rather than the actual type of the object.

  http://www.bardev.com/2016/06/26/duck-typing/
  https://stackoverflow.com/q/47458820/3317808
  https://stackoverflow.com/a/1948212/3317808

  In TypeScript, interfaces fill the role of naming these types,
  and are a powerful way of defining contracts within your code as well as
  contracts with code outside of your project.

  Our First Interface
  ===================

  The easiest way to see how interfaces work is to start with a below example:

  function prinLabel(labelledObj:{label: string}) {
      console.log(labelledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  prinLabel(myObj);

  The type-checker checks the call to "printLabel". The "printLabel" function has a
  single parameter that requires that the object passed in has a property called
  "label" of type string. Notice that our object actually has more properties than
  this, but the compiler only checks that at least the ones required are present
  and match the types required. There are some cases where TypeScript isn’t as
  lenient, which we’ll cover in a bit.

  We can write the same example again, this time using an interface to describe
  the requirement of having the "label" property that is a string:

  interface labelledType {
      label: string;
  }

  function printLabel(labelledObj: labelledType) {
      console.log(labelledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  The interface LabelledValue is a name we can now use to describe the requirement
  in the previous example. It still represents having a single property called
  label that is of type string. Notice we didn’t have to explicitly say that the
  object we pass to printLabel implements this interface like we might have to
  in other languages. Here, it’s only the shape that matters. If the object we
  pass to the function meets the requirements listed, then it’s allowed.

  It’s worth pointing out that the type-checker does not require that these
  properties come in any sort of order, only that the properties the interface
  requires are present and have the required type.

*/

/*
  Optional Properties
  ===================

  Not all properties of an interface may be required. Some exist under certain
  conditions or may not be there at all. These optional properties are popular
  when creating patterns like “option bags” where you pass an object to a
  function that only has a couple of properties filled in.

  Here’s an example of this pattern:

  interface SquareConfig {
      color?: string;
      width?: number;
      //width?: number is equivalent to width: number | undefined
  }

  function createSquare(config: SquareConfig): {color: string, area: number}{
    let newSquare = {color: "white", area: 100};
    if(config.color){
      newSquare.color = config.color;
    }
    if(config.width){
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({color: "black"});
  console.log(mySquare.area);

  Interfaces with optional properties are written similar to other interfaces,
  with each optional property denoted by a ? at the end of the property name in
  the declaration.

  The advantage of optional properties is that you can describe these possibly
  available properties while still also preventing use of properties that are
  not part of the interface. For example, had we mistyped the name of the "color"
  property in "createSquare", we would get an error message letting us know:

  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
      let newSquare = {color: "white", area: 100};
      if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
  }

  let mySquare = createSquare({color: "black"});


*/
