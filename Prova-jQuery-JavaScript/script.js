$(document).ready(function(){
   $("img").click(function(){

        if($(this).attr('id')%8==0&&$(this).attr('id')<16){
          $("#20").attr('src',$(this).attr('src'));
          trocaAdiante("#30", "img/semifinal.jpg")
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))

        }
        else if($(this).attr('id')%8==1&&$(this).attr('id')<16){
          $("#24").attr('src',$(this).attr('src'));
          trocaAdiante("#30", "img/semifinal.jpg")
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==2&&$(this).attr('id')<16){
          $("#21").attr('src',$(this).attr('src'));
          trocaAdiante("#32", "img/semifinal.jpg")
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==3&&$(this).attr('id')<16){
          $("#25").attr('src',$(this).attr('src'));
          trocaAdiante("#32", "img/semifinal.jpg")
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==4&&$(this).attr('id')<16){
          $("#22").attr('src',$(this).attr('src'));
          trocaAdiante("#31", "img/semifinal.jpg")
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==5&&$(this).attr('id')<16){
          $("#26").attr('src',$(this).attr('src'));
          trocaAdiante("#31", "img/semifinal.jpg")
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==6&&$(this).attr('id')<16){
          $("#23").attr('src',$(this).attr('src'));
          trocaAdiante("#33", "img/semifinal.jpg")
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        else if($(this).attr('id')%8==7&&$(this).attr('id')<16){
          $("#27").attr('src',$(this).attr('src'));
          trocaAdiante("#33", "img/semifinal.jpg")
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }

        if($(this).attr('id')%4==0&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#30").attr('src',$(this).attr('src'));
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        if($(this).attr('id')%4==1&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#32").attr('src',$(this).attr('src'));
          trocaAdiante("#40", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        if($(this).attr('id')%4==2&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#31").attr('src',$(this).attr('src'));
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }
        if($(this).attr('id')%4==3&&$(this).attr('id')<28&&$(this).attr('id')>19){
          $("#33").attr('src',$(this).attr('src'));
          trocaAdiante("#41", "img/decisão-final.png")
          anima($(this).attr('id'))
        }


        if($(this).attr('id')%2==0&&$(this).attr('id')<34&&$(this).attr('id')>29){
          $("#40").attr('src',$(this).attr('src'));
          trocaAdiante("#50", "img/campeao.jpg")
          anima($(this).attr('id'))
        }
        if($(this).attr('id')%2==1&&$(this).attr('id')<34&&$(this).attr('id')>29){
          $("#41").attr('src',$(this).attr('src'));
          trocaAdiante("#50", "img/campeao.jpg")
          anima($(this).attr('id'))
        }


        if($(this).attr('id')==40&&$(this).attr('src')!=""){
          $("#50").attr('src',$("#40").attr('src'))
          cresce("#50")
          anima($(this).attr('id'))



        } else if($(this).attr('id')==41&&$(this).attr('src')!=""){
          $("#50").attr('src',$("#41").attr('src'))
          cresce("#50")
          anima($(this).attr('id'))
        }




    });
    $("#botaNome").click(function(){
      var nomeDoUsuario = document.getElementById('nomeJogador').value
      if(nomeDoUsuario!=""){
        var p = document.createElement("p");
        var node = document.createTextNode("Elaborado por " + nomeDoUsuario);
        p.appendChild(node);
        var element = document.getElementById("nome");
        element.appendChild(p);
      }
    });
});

function trocaAdiante(id2, src){

    $(id2).attr('src',src)

    $("#50").attr('src',"img/campeao.jpg")
}
function cresce(id){
  $(id).css({ "width":"300px","height":"180px"});
}
