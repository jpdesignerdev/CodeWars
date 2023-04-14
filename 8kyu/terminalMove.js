// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15


//My solution:
function move (position, roll) {
    //parameters: current position, single dice roll
    //return: new position number 
    // move(3, 6) should equal 15
  
    // return roll*2 to the current position
    
    return (roll*2) + position;
  }