// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


// My solution

function noOdds( values ){
  // Return all non-odd values
  
  //Parameters: array
  //Returns: New array with only evens - must stay in original order
  //Examples: [10,2,9,2,3,4,5] -> [10,2,2,4]

  // Pseudocode:
  // duplicate array with only odd values
  return values.filter((element) => element % 2 == 0 )
}