
   var userName = prompt('What\'s your name?');
   alert('Hello ' + userName + '. Thanks for coming to my site!');


    var answerOne = prompt('Am I a Wizard?').toUpperCase();
    var myAnswerOne = 'YES';
        if ( answerOne === myAnswerOne || answerOne === 'Y') {
          alert('#Ravenclaw4life');
        } else {
          alert('my letter to Hogwarts just got lost in the mail, okay?!');
        };
        console.log('users input === YES or users input === Y')

    var answerTwo = prompt('Have I collected all original 151 Pokemon?').toUpperCase();
    var myAnswerTwo = 'YES';
      if (answerTwo === myAnswerTwo || answerTwo === 'Y') {
          alert('Yes, it was my crowning achievement as an 8 year old! ');
          }
          else{
            alert('I totally did! Do not underestimate my abilities as a Pokemon master!');
      };

      var answerThree = prompt('Is my favorite color blue?').toUpperCase();
        var myAnswerThree = 'NO';
          if (answerThree === myAnswerThree || answerThree === 'N') {
                alert('No, I have no idea why everyone thinks that. ');
                }
                else{
                  alert('You are correct, my favoirite color is Rainbow.');
            };
            var answerFour = prompt('Do you think I\'m tired right now?').toUpperCase();
                 var myAnswerFour = 'YES';
                   if (answerFour === myAnswerFour || answerFour === 'Y') {
                     alert('…nods yes.');
                     } else{
                     alert('You are very wrong friend, I am perpetually tired.  ');
                   };

                   var pokemon = ['Mewtwo', 'Mew', 'Zapadose', 'Venisaur'];
                   var userPokmeonAnswer = prompt('Who\'s the best pokemon?')
                   if (pokemon.indexOf(userPokmeonAnswer)!==-1) {
                     alert( 'yes.');
                   } else{
                     alert('get out. ');
                   };
