function distanceFromHqInBlocks(someValue) {
  const distanceFromHqInBlocks =require(distances)
  expect(distanceFromHqInBlocks(43)).to.equal(1);
}
function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
}
