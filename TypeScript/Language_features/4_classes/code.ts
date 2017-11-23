interface Named{
  x: string;
}

class Animal implements Named{
  private name: string;
  constructor(theName: string){
    this.name = name;
    this.x = 'y';
  }
}

new Animal('Cat').name;
