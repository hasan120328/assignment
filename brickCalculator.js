//brickCalculator function
function brickCalculator(floor) {
 
    var brickPerFeet = 1000; // 1000 piece brick need for per feet
    var firstTenFloor = (10 * 15 * brickPerFeet); // from 1 - 10th floor, per floor height is 15 feet
    var secondTenFloor = (10 * 12 * brickPerFeet); // from 11th to 20th floor per floor height is 12 feet 
 
    // checking floor value is greater than zero or not 
    while (floor > 0) {
        if (floor >= 1 && floor <= 10) {
            var floorHeight = floor * 15; // floor height calculation
            var totalBrick = floorHeight * brickPerFeet; //total brick calculation
            return totalBrick; 
        }
 
        else if (floor > 10 && floor <= 20) {
            var remainderFloor = floor % 10; // remain floor count
            var totalBrick = firstTenFloor + (remainderFloor * 12 * brickPerFeet);
            return totalBrick;
        }
 
        else {
            var remainderFloor = (floor - 20); // remain floor count
            var totalBrick = firstTenFloor + secondTenFloor + (remainderFloor * 10 * brickPerFeet); // upto 20 floor per floor height is 10 feet
            return totalBrick;
        }
    }
 
    return 'oh dear! - Floor value cannot be zero or negative'; // return this when value is negative or zero 
}
