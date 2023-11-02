function linearSearch (arr, target) {

  // Can you solve this in one line?
  // return arr.indexof(target)
  return arr.includes(target) ? target : -1;

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0; high = arr.length -1;

  // While high and low indices do not overlap...
  while(low <= high) {

    // Find the midpoint between high and low indices
    let midpoint = Math.floor((low + high)/2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
      if(target === arr[midpoint]) return midpoint;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      if(target > arr[midpoint]) low = midpoint +1;
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      if(target < arr[midpoint]) high = midpoint -1;
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}
// arr = [];

//     for (let i = 0 ; i < 1000000 ; i++) {
//       arr.push(i);
//     }
// console.log(linearSearch(arr, 100))

module.exports = [linearSearch, binarySearch]
