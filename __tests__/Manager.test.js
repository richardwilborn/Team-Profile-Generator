const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set phone number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Abc", 1, "test@test.com", testValue);
  expect(e.phoneNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Abc", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get phone number via getPhoneNumber()", () => {
  const testValue = 100;
  const e = new Manager("Abc", 1, "test@test.com", testValue);
  expect(e.getPhoneNumber()).toBe(testValue);
});
