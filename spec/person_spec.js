let Person = require("../src/person");
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("person", function() {
  it("it should result the whole sentence", function() {
    expect( person.name).toBe("Ryan")
  }) 
  it("a", function() {
  expect( person.age).toBe(30)
  })
  it("b", function(){
    expect( person.gender).toBe("male")
  })
  it("c", function(){
    expect( person.interests[0]).toBe('being a hardarse')
  })
  it("d", function(){
    expect(person.hello()).toBe("Hello,my name is Ryan I am 30 years old. My interests are being a hardarse,agile,ssd hard drives")
  })
});


