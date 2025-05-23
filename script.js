/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const name = "John Doe";
const age = 30;
const studyField = "Physics";

const participant = { name, age, studyField };
console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantInfo = {
  ...participant, // Spread operator to copy properties
  displayInfo() { // Shorthand method
    console.log(`Name: ${this.name}, Age: ${this.age}, Field of Study: ${this.studyField}`);
  }
};
participantInfo.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantInfoArrow = {
  ...participant,
  displayInfo: () => {
    console.log(`Name: ${participantInfoArrow.name}, Age: ${participantInfoArrow.age}, Field of Study: ${participantInfoArrow.studyField}`);
  }
};
participantInfoArrow.displayInfo();

/*
 * Observations: 
 * TODO: Explain here.
 * In the arrow function, `this` does not refer to the `participantInfoArrow` object as it does in the regular function. Instead, it refers to the lexical scope in which the arrow function was defined. This is why we have to use `participantInfoArrow.name` instead of `this.name`.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(participant, propName, propValue) { 
  return {
    ...participant, 
    [propName]: propValue // Computed property name to set the new property
  };
}
const updatedParticipant = updateParticipantInfo(participant, "age", 31);
console.log(updatedParticipant);
