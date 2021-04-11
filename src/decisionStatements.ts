let x=5;
function moreLessOrEqualTo(i: number) {
    if (i>5) {
        // this block executes if statementA is true
        console.log("Check 1: This should not print: more than 5");
      } else if (i<5) {
        // this block executes if statementA is false
        // AND statementB is true
        console.log("Check 2: This should not print:less than 5");
      } else if (i==5) {
        // this block executes if statementA is false
        // AND statementB is false
        // AND statementC is true
        console.log("Check 3:equal to 5");
      }
}

moreLessOrEqualTo(x)

let someVariable: string = "Qiwi";

switch (someVariable) {
    case "Apple":
      // action1
      console.log("It's an apple");
      break;
    case "Qiwi":
    // action2
    console.log("It's a qiwi!");
    break;
    default:
    //default action
    console.log("Unknown fruit");
  }


  
  