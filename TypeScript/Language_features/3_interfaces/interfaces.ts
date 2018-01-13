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

/*
  Readonly properties
  ===================
  Some properties should only be modifiable when an object is first created.
  You can specify this by putting readonly before the name of the property:

  interface Point{
    readonly x: number;
    readonly y: number;
  }

  You can construct a Point by assigning an object literal. After the
  assignment, x and y can’t be changed.

  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1:Point = {x:10, y:20};
  p1.x = 5; // error

  TypeScript comes with a "ReadonlyArray<T>" type that is the same as "Array<T>"
  with all mutating methods removed, so you can make sure you don’t change
  your arrays after creation:

  let a: number[] = [1,2,3,4];
  let ro: ReadonlyArray<number> = a;
  ro[0] = 12; // error!
  ro.push(5); // error!
  ro.length = 100; // error!
  a = ro; // error!

  On the last line of the snippet you can see that even assigning the entire
  ReadonlyArray back to a normal array is illegal. You can still override it
  with a type assertion, though:

  a = ro as number[];

  readonly vs const
  =================
  The easiest way to remember whether to use readonly or const is to ask whether
  you’re using it on a variable or a property. Variables use const whereas
  properties use readonly.

*/

/*
  Excess Property Checks
  ======================
  In our first example using interfaces, TypeScript lets us pass
  "{ size: number; label: string; }" to something that only expected a
  "{ label: string; }". We also just learned about optional properties, and how
  they’re useful when describing so-called “option bags”.

  However, combining the two naively would let you to shoot yourself in the
  foot the same way you might in JavaScript. For example, taking our last
  example using createSquare:

  interface SquareConfig {
    color?: string;
    width?: number;
  }
  function createSquare(config: SquareConfig):{color: string, area: number}{
    // ...
  }

  let mySquare = createSquare({color: "red", width: 100});

  Notice the given argument to createSquare is spelled colour instead of color.
  In plain JavaScript, this sort of thing fails silently.

  You could argue that this program is correctly typed, since the width properties
  are compatible, there’s no color property present, and the extra colour
  property is insignificant.

  However, TypeScript takes the stance that there’s probably a bug in this code.
  Object literals get special treatment and undergo excess property checking
  when assigning them to other variables, or passing them as arguments. If an
  object literal has any properties that the “target type” doesn’t have, you’ll
  get an error.

  // error: 'colour' not expected in type 'SquareConfig'
  let mySquare = createSquare({ colour: "red", width: 100 });

  Getting around these checks is actually really simple. The easiest method is
  to just use a type assertion:

  let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

  About type assertion: https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html

  However, a better approach might be to add a string index signature if you’re
  sure that the object can have some extra properties that are used in some
  special way. If SquareConfigs can have color and width properties with the
  above types, but could also have any number of other properties, then we
  could define it like so:

  interface SquareConfig {
    color?: string;
    width?: number;
    [propname: string]: any;
  }

  We’ll discuss index signatures in a bit, but here we’re saying a "SquareConfig"
  can have any number of properties, and as long as they aren’t color or width,
  their types don’t matter.

  One final way to get around these checks, which might be a bit surprising,
  is to assign the object to another variable: Since squareOptions won’t undergo
  excess property checks, the compiler won’t give you an error.

  let squareOptions = { colour: "red", width: 100 };
  let mySquare = createSquare(squareOptions);

  Keep in mind that for simple code like above, you probably shouldn’t be trying
  to “get around” these checks. For more complex object literals that have methods
  and hold state, you might need to keep these techniques in mind, but a majority
  of excess property errors are actually bugs. That means if you’re running into
  excess property checking problems for something like option bags, you might
  need to revise some of your type declarations. In this instance, if it’s okay
  to pass an object with both a "color" or "colour" property to "createSquare", you
  should fix up the definition of "SquareConfig" to reflect that.

*/

/*
  Function Types
  ==============
  Interfaces are capable of describing the wide range of shapes that JavaScript
  objects can take. In addition to describing an object with properties,
  interfaces are also capable of describing function types.

  To describe a function type with an interface, we give the interface a call
  signature. This is like a function declaration with only the parameter list
  and return type given. Each parameter in the parameter list requires both
  name and type.

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  Once defined, we can use this function type interface like we would other
  interfaces. Here, we show how you can create a variable of a function type
  and assign it a function value of the same type.

  interface SearchFunc {
    (source: string, substring: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function (source: string, subString: string) {
      let result = source.search(subString);
      return result > -1;
  }

  For function types to correctly type-check, the names of the parameters do
  not need to match. We could have, for example, written the above example like
  this:

  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  }

  Function parameters are checked one at a time, with the type in each corresponding
  parameter position checked against each other. If you do not want to specify
  types at all, TypeScript’s contextual typing can infer the argument types
  since the function value is assigned directly to a variable of type SearchFunc.
  Here, also, the return type of our function expression is implied by the values
  it returns (here false and true). Had the function expression returned numbers
  or strings, the type-checker would have warned us that return type doesn’t match
  the return type described in the SearchFunc interface.

  let mySearch: SearchFunc;
  mySearch = function(src, sub) {
      let result = src.search(sub);
      return result > -1;
  }
*/

/*
  Indexable Types
  ===============

  Similarly to how we can use interfaces to describe function types, we can also
  describe types that we can “index into” like a[10], or ageMap["daniel"].
  Indexable types have an index signature that describes the types we can use to
  index into the object, along with the corresponding return types when indexing.

  Let’s take an example:

  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  let myStr: string = myArray[0];
  console.log(myStr);

  Above, we have a StringArray interface that has an index signature. This index
  signature states that when a StringArray is indexed with a number, it will
  return a string.

  There are two types of supported index signatures: string and number. It is
  possible to support both types of indexers, but the type returned from a
  numeric indexer must be a subtype of the type returned from the string indexer.
  This is because when indexing with a number, JavaScript will actually convert
  that to a string before indexing into an object. That means that indexing with
  100 (a number) is the same thing as indexing with "100" (a string), so the
  two need to be consistent.

    https://stackoverflow.com/a/47488162/3317808


*/
