var year = parseInt(prompt("Guess the year of the Chinese zodiac"));

var index = (year - 4) % 12;

if (index == 0) {
    console.log("Year of rat");
} else if (index == 1) {
    console.log("Year of ox");
} else if (index == 2) {
    console.log("Year of tiger");
} else if (index == 3) {
    console.log("Year of rabbit");
} else if (index == 4) {
    console.log("Year of dragon");
} else if (index == 5) {
    console.log("Year of snake");
} else if (index == 6) {
    console.log("Year of horse");
} else if (index == 7) {
    console.log("Year of goat");
} else if (index == 8) {
    console.log("Year of monkey");
} else if (index == 9) {
    console.log("Year of rooster");
} else if (index == 10) {
    console.log("Year of dog");
} else if (index == 11) {
    console.log("Year of pig");
} else {
    console.log("None");
}
    
var year = parseInt(prompt("Guess the year of the Chinese zodiac"));

var index = (year - 4) % 12;

switch (index) {
    case 0:
        console.log("Year of rat");
        break;
    case 1:
        console.log("Year of ox");
        break;
    case 2:
        console.log("Year of tiger");
        break;
    case 3:
        console.log("Year of rabbit");
        break;
    case 4:
        console.log("Year of dragon");
        break;
    case 5:
        console.log("Year of snake");
        break;
    case 6:
        console.log("Year of horse");
        break;
    case 7:
        console.log("Year of goat");
        break;
    case 8:
        console.log("Year of monkey");
        break;
    case 9:
        console.log("Year of rooster");
        break;
    case 10:
        console.log("Year of dog");
        break;
    case 11:
        console.log("Year of pig");
        break;
    default:
        console.log("It's not a valid year");
}

var year = parseInt(prompt("Guess the year of the Chinese zodiac"));

var index = (year - 4) % 12;

var zodiacSign = index == 0 ? "Year of the Rat"
  : index == 1 ? "Year of the Ox"
  : index == 2 ? "Year of the Tiger"
  : index == 3 ? "Year of the Rabbit"
  : index == 4 ? "Year of the Dragon"
  : index == 5 ? "Year of the Snake"
  : index == 6 ? "Year of the Horse"
  : index == 7 ? "Year of the Goat"
  : index == 8 ? "Year of the Monkey"
  : index == 9 ? "Year of the Rooster"
  : index == 10 ? "Year of the Dog"
  : index == 11 ? "Year of the Pig"
  : "None";
  console.log("Zodiac sign:", zodiacSign);
  