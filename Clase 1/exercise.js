//INTENTENLO CON FUNCIONES DE ALTA JERARQUÍA.
class Exercise {
  constructor(){
    this.values = [];
  }

  addValue(value){
    this.values.push(value);
    
  }

  showValue(){
    console.log(this.values);

  }

deleteValue(i){
  let aux = []
  this.values.forEach((element,ind) => {
    if (i !== ind) {
      aux.push(element);
    }
  });
  this.values = aux;
}
}

const example = new Exercise();
example.addValue(2);
example.addValue(3);
example.addValue(4);
example.showValue();

example.deleteValue(1);
example.showValue();