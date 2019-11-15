$(document).ready(function(){
    var p = 0;
  $('#pedra,#papel,#tesoura').click(function(){
      var select = $(this).attr("id");
      $('#select').html(select);

      var ia = Math.floor(Math.random()*3);
      if(ia ==0){
          ia = "pedra";
      }
      else if(ia==1){
          ia="papel";
      }
      else if(ia==2){
          ia= "tesoura"
      }

      $('#iaSelect').html(ia)

    if(select=="papel"){
        if(ia=="papel"){
            $('#resp').html("Voce empatou")
        }
        else if(ia=="pedra"){
            $('#resp').html("Voce ganhou")
            p+=1;
            $('#punt').html(p)

        }
        else if(ia=="tesoura"){
            $('#resp').html("Voce perdeu")
            p=0;
            $('#punt').html(p)

        }
    }
    else if(select=="pedra"){
        if(ia=="papel"){
            $('#resp').html("Voce perdeu")
            p=0;
            $('#punt').html(p)
        }
        else if(ia=="pedra"){
            $('#resp').html("Voce empatou")

        }
        else if(ia=="tesoura"){
            $('#resp').html("Voce ganhou")
            p+=1;
            $('#punt').html(p)

        }
    }
    else if(select=="tesoura"){
        if(ia=="papel"){
            $('#resp').html("Voce ganhou")
            p+=1;
            $('#punt').html(p)
        }
        else if(ia=="pedra"){
            $('#resp').html("Voce perdeu")
            p=0;
            $('#punt').html(p)

        }
        else if(ia=="tesoura"){
            $('#resp').html("Voce empatou")

        }
    }


  })  
})

