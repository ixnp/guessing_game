
  var userName = prompt('What\'s your name?');
  alert('Hello ' + userName + '. Thanks for coming to my site!');

  //We want to ask the user a question
  // take their answer as inpput; stored in a var
  // Validate thati their Answer matches my answer
  //Depending on True or False, provide feedback

  var answerOne = prompt('What state was I born in?');
  var myAnswerOne = 'Washington';
    if (answerOne === myAnswerOne) {
      alert('You got it right! I was born in Washington');
    } else{
      alert('Sorry, that\'s wrong I was born in Washingtom');
    };

    var answerOne = prompt('Who\'s my favorite Pokemon?');
    var myAnswerOne = 'Mewtwo';
      if (answerOne === myAnswerOne) {
        alert('MEWTWO IS KING');
      } else{
        alert('no ...… it\'s Mewtwo, always until the end of time.');
      };

      var answerOne = prompt('Am I a Wizard?');
      var myAnswerOne = 'Yes';
        if (answerOne === myAnswerOne) {
          alert('#Ravenclaw4life');
        } else{
          alert('….my letter to Hogwarts just got lost in the mail, okay?!');
        };

        var answerOne = prompt('Who\'s the best Startrek Captain? (according to ix) ');
        var myAnswerOne = 'Janeway';
          if (answerOne === myAnswerOne) {
            alert('RIGHT!? Janeway was the perfect mixture of competent and BadAss!');
          } else{
            alert('OH COME ON REALLY? Look Kathryn Janeway was superior to every captain in the series… I will fight you. ');
          };
