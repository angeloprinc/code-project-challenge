// import the readline module
const readline = require('readline');
//creat an interface to read the user input
const teo = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//prompting the user to input the speeed
teo.question('Enter the speed of the car: ', (speed) => {
  speed = parseFloat(speed);
// declaring speed limit and demerit points
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;
// Check if the speed is within the limit
  if (speed <= speedLimit) {
    console.log("Ok");
  } 
   // If speed exceeds the limit, calculate demerit points
  else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log('Demerit points: ${demeritPoints}');
  } 
// if the demerit points surpass 12 points 
if (demeritPoints >= 12)
  console.log('license suspended')

if (demeritPoints >= 20)
  console.log('Your car is taken')

  teo.close();
});