//
var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');
var correctAnswer = 0
function question1(){
var answerOne = prompt('Am I a Wizard?').toUpperCase();
var myAnswerOne = 'YES';
if ( answerOne === myAnswerOne || answerOne === 'Y') {
  correctAnswer++;
  alert('#Ravenclaw4life') ;
} else {
  alert('my letter to Hogwarts just got lost in the mail, okay?!');
};
console.log('users input === YES or users input === Y')
}
question1()

function question2(){
var answerTwo = prompt('Have I collected all original 151 Pokemon?').toUpperCase();
var myAnswerTwo = 'YES';
if (answerTwo === myAnswerTwo || answerTwo === 'Y') {
  correctAnswer++;
  alert('Yes, it was my crowning achievement as an 8 year old! ');
}
else{
  alert('I totally did! Do not underestimate my abilities as a Pokemon master!');
};
}
question2()
//
function question3(){
var answerThree = prompt('Is my favorite color blue?').toUpperCase();
var myAnswerThree = 'YES';
if (answerThree === myAnswerThree || answerThree === 'Y') {
  alert('No, I have no idea why everyone thinks that. ');
}
  else{
  correctAnswer++;
  alert('You are correct, my favoirite color is Rainbow.');
};
}
question3()

function question4() {
var answerFour = prompt('Do you think I\'m tired right now?').toUpperCase();
var myAnswerFour = 'YES';
if (answerFour === myAnswerFour || answerFour === 'Y') {
  correctAnswer++;
  alert('nods yes.');
} else{
  alert('You are very wrong friend, I am perpetually tired.');
};
}
question4()

function question5(){
var answerFive = prompt('Did I go to Art school?').toUpperCase();
var myAnswerFive = 'YES';
if (answerFive === myAnswerFive || answerFive === 'Y') {
  correctAnswer++;
  alert('yeah, I\'m pretty much an Art school drop-out stereotype.');
} else{
  alert('Nope, I went to Art school to become a scientific illustrator.');
}
}
question5()

function question6(){
var tryNumber = 0;
do{
  tryNumber ++;
  var answerSix = prompt('How old am I?');
  if (answerSix > 26 ) {
    alert('Nope, though people generally say I am mature for my age.');
} else if (answerSix < 26 ) {
  alert ('Now I know I dress like a 5-year old\'s imaginary friend but I promise I\'m older.');
}

} while (answerSix != 26 && tryNumber < 4)
if (tryNumber == 4 ) {
  alert('nope, nope, nope, nope, how about we just move on to the next question');
} else{
  alert('Yep! Good guess!');
}
}
question6()

function question7(){
var guess = 0
while( guess <= 6 ){
var answerSeven = prompt ('Can you guess one of my 4 favorite Pokemon?');
var myAsnswerSeven = ['Mewtwo','Rowlet','Zapadose','Venusaur'];
if (myAsnswerSeven.indexOf(answerSeven) > -1){
  correctAnswer++;
  guess++;
  alert('You got it right! Mewtwo, Rowlet , Zapadose , Venusaur are my favorites')
  break;
  }
  else {
  guess++;
  alert('Nope.')
  }
  }

if(correctAnswer !== 7 )
{
alert('You got ' + correctAnswer + ' out of ' + 7 + ' correct');
}
else {

alert('You got ' + correctAnswers + ' out of ' + 7 + ' correct');
}
}
question7()
