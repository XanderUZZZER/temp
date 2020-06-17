function foou() {
  Promise.resolve().then(foo);
}

//foou();
function cs2() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  }
}

let d = cs2();
d();
d();
let f = cs2();
f();
f();

var addTo = (passed) => {
  var add = (inner) => {
    var foo = () => {
      return inner + passed
    }
    return foo;
  }
  return add;
}


var addThree = addTo(3)(5);

console.dir(addThree);
console.log(addThree);
console.log(addThree());
console.log(addThree.this);

let value = "Сюрприз!";

function j() {
  let value = "ближайшее значение";

  function g() {
    //debugger; // в консоли: напишите alert(value); Сюрприз!
    console.log(value);
  }

  return g;
}

let n = j();
n();

let fff = {
  bbb: function () {
    console.log(this);
  }
}
fff.bbb();    // 'this' указывает на объект 'foo', так как функция 'baz' была вызвана 
// как метод объекта 'foo'
let bVar = fff.bbb;
bVar();

function person() {
  let name = 'Peter';

  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // prints 'Peter'