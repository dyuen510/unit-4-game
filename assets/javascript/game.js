
 $(document).text(function(){
     var random=Math.floor(Math.random()*101+19);
     
 
 
    var wins=0;
    var loss=0;
    var score=0;

    var jewelOne= Math.floor(Math.random()*11+1)
    var jewelTwo= Math.floor(Math.random()*11+1)
    var jewelThree= Math.floor(Math.random()*11+1)
    var jewelFour= Math.floor(Math.random()*11+1)

   
    
    $('#pointsNeeded').text(random);
    $('#winnings').text(wins);
    $('#losses').text(loss);
    $('#numberScore').text(score);
    
    function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random);
        $('#pointsNeeded').text(random);
        jewelOne= Math.floor(Math.random()*11+1);
        jewelTwo= Math.floor(Math.random()*11+1);
        jewelThree= Math.floor(Math.random()*11+1);
        jewelFour= Math.floor(Math.random()*11+1);
        score = 0;
        $('#numberScored').text(score);
        } 

    function win(){
        alert("you won!");
        wins++;
        $('#winnings').text(wins);
        reset();
    }
    function lose(){
        alert("you lost!");
        loss++;
        $('#losses').text(loss);
        reset();
    }


  $('#jewel1').on ('click', function(){
    score = score + jewelOne;
    console.log("numberScored" + score);
    $('#numberScored').text(score); 
        if (score == random){
          win();
        }
        else if ( score > random){
          lose();
        }   
  }) 
  $('#jewel2').on ('click', function(){
      score = score + jewelTwo;
      console.log("numberScored" + score);
      $('#numberScored').text(score);
      if (score == random){
          win();
      }else if( score > random){
          lose();
      }
  })
$('#jewel3').on('click',function(){
    score =score + jewelThree;
    console.log("numberScored" + score);
    $('#numberScored').text(score);
    if (score == random){
        win();
    }else if (score > random){
        lose();
    }
})
$('#jewel4').on('click',function(){
    score = score + jewelFour;
    console.log("numberScored"+score);
    $('#numberScored').text(score);
    if (score == random){
        win();
    }else if (score > random){
        lose();
    }
})
})