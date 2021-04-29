import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () =>{
  dataset.forEach(currentProblem =>{
    switch (currentProblem.method) {
      case "add":
        it("should add x,y",() => {
          expect(calculator.add(currentProblem.x, currentProblem.y)).toBe(currentProblem.x + currentProblem.y)
        })
      case "subtract":
        it("should subtract x,y", () => {
          expect(calculator.subtract(currentProblem.x, currentProblem.y)).toBe(currentProblem.x - currentProblem.y)
        })
      case "multiply":
        it("should multiply x,y", () => {
          expect(calculator.multiply(currentProblem.x, currentProblem.y)).toBe(currentProblem.x * currentProblem.y)
        })
      case "divide":
        it("should divide x,y", () => {
          expect(calculator.divide(currentProblem.x, currentProblem.y)).toBe(currentProblem.x / currentProblem.y)
        })
      default:
        return;
    }
  })
});