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
  Duck typing Vs Structural typing: https://stackoverflow.com/a/1948212/3317808

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

  The type-checker checks the call to printLabel. The printLabel function has a
  single parameter that requires that the object passed in has a property called
  label of type string. Notice that our object actually has more properties than
  this, but the compiler only checks that at least the ones required are present
  and match the types required. There are some cases where TypeScript isn’t as
  lenient, which we’ll cover in a bit.




*/
