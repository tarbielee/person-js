let Person = require("../src/person");
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("person", function() {
  it("should return name", function() {
    expect( person.name).toBe("Ryan")
  }) 
  it("should return age", function() {
  expect( person.age).toBe(30)
  })
  it("should return gender", function(){
    expect( person.gender).toBe("male")
  })
  it("should return interests", function(){
    expect( person.interests[0]).toBe('being a hardarse')
  })
  it("should return the whole sentence", function(){
    expect(person.hello()).toBe("Hello,my name is Ryan I am 30 years old. My interests are being a hardarse,agile,ssd hard drives")
  })
});


