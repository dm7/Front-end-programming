/*   example.js  */
function Animal() {
    var _name="";
    var _owner="";
    var _sound="";
    var _favFood="";
    
    Object.defineProperty(this, 'name', {
        get: function() { return _name; },
        set: function(n) {
            var regpat =/^[A_Za-z]+$/;
            if(regpat.test(n))
                _name = n;
            else{
                throw new Exception("Wrong name not allowed");
            }
        },
        writable: true
    });

    Object.defineProperty(this, 'owner', {
        get: function() { return _owner; },
        set: function(o) {
            //check conditions before setting the name
            _owner = o;
        },
        writable: true
    });

    Object.defineProperty(this, 'sound', {
        get: function() { return _sound; },
        set: function(s) {
            //check conditions before setting the name
            _sound = s;
        },
        writable: true
    });

    Object.defineProperty(this, 'favFood', {
        get: function() { return _favFood; },
        set: function(f) {
            //check conditions before setting the name
            _favFood = f;
        },
        writable: true
    });

}

Animal.prototype.toString = function(){return this.name + this.sound + this.favFood;};

/* animal1.__proto__ points to Animal.prototype */  
var animal1 = new Animal();
var animal2 = new Animal();

try{
    animal1.name = "Spot";    
}catch(e){
    console.log(e.message);
}

animal1.owner = "Paul";
animal1.sound = undefined;

animal2.name= "Spot2";
animal2.owner = "Paul2";
animal2.sound = "undefined";

document.write("Animal properties:" + "<br>");
document.write(animal1.name + "<br>");
document.write(animal1.owner + "<br>");
document.write(animal1.sound + "<br><br><br>");

document.write("Animal2 properties:" + "<br>");
document.write(animal2.name + "<br>");
document.write(animal2.owner + "<br>");
document.write(animal2.sound + "<br><br><br>");



/* Cat.__proto__ points to Function.prototype */    
function Cat() {
    /*
        Below line will add definePropertiess name/sound/owner/favFood 
        to an instance etc...

        Chain initialization
    */
    Animal.call(this); 

    var _mode = "";

    Object.defineProperty(this, 'mode', {
        get: function() { return _mode; },
        set: function(m) {
            //check conditions before setting the name
            _mode = m;
        },
        writable: true
    });
}

/*
    After executing, below line of code,
    Cat.prototype.__proto__ will point to  Animal.prototype;
*/
Cat.prototype = Object.create(Animal.prototype);

/*
    In the above line, when Cat.prototype.__proto__ points to Animal.prototype,
    Cat.prototype.constructor automatically points to Animal, so this below line    
*/
Cat.prototype.constructor = Cat;

Cat.prototype.toString = function(){return this.name + this.sound + this.favFood + this.mode;};

/* sophie.__proto__ points to Cat.prototype */
var sophie = new Cat();

sophie.name = "Sophie";
sophie.owner = "Derek";
sophie.sound = "Meow";
sophie.mode = 'xyz';

document.write("Cat properties:" + "<br>");
document.write(sophie.name + "<br />");
document.write(sophie.owner + "<br />");
document.write(sophie.mode + "<br />");