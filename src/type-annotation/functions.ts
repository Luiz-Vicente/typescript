/* TYPE IN PARAMETER */
function greet(name: string): string {
  // 'greet' is a function with specified parameter and return types.
  return `Hello, ${name}!`;
}

/* VOID TYPE */
function noReturn(): void {
  // Declares that this function does not have a return
  console.log('this function does not have a return');
}

export default {
  greet,
  noReturn,
};
