export default function Calculate(current, operand, number) {
  current = parseInt(current);
  console.log(current);
  number = parseInt(number);
  console.log(number);
  console.log(operand);
  if (operand === "Add") {
    return current + number;
  } else if (operand === "Subtract") {
    return current - number;
  } else if (operand === "Multiply") {
    return current * number;
  } else if (operand === "Divide") {
    return current / number;
  }
}