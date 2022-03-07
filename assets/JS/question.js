let question = ['Comment apeller une fonction php ?', "c'est quoi une procedure ?"];
let reponse = [['Apple', 'Banana','souris','ee'],['allo','pk','rrr','ttt']];
let bonneReponse = ['Apple','allo'];
let reponseU;
var random;
var vie =3;
test = affichage();
function affichage(){
   random= Math.floor(Math.random() * 2);
   var textQ= question[random];
   document.getElementById('question').innerHTML =textQ;
   for (var i=0;i<=reponse[random].length;i++){
    document.getElementById('reponse1').innerHTML ="<input class=\"bouton\" id='test0' type=\"button\" OnClick=\"correct('0')\" value="+reponse[random][0]+">";
    document.getElementById('reponse2').innerHTML ="<input class=\"bouton\" id='test1' type=\"button\" OnClick=\"correct('1')\"  value="+reponse[random][1]+">";
    document.getElementById('reponse3').innerHTML ="<input class=\"bouton\" id='test2' type=\"button\" OnClick=\"correct('2')\" value="+reponse[random][2]+">";
    document.getElementById('reponse4').innerHTML ="<input class=\"bouton\" id='test3' type=\"button\" OnClick=\"jcorrect('3')\" value="+reponse[random][3]+">";
    }
}
function correct(reponseUtilisateur){
        var value1=document.getElementById("test"+reponseUtilisateur);
        value1=value1.value;
        var bonneReponse1=bonneReponse[random];
        console.log(bonneReponse1);
        console.log(value1);
    if(vie!=0){
        if(value1==bonneReponse[random]){
            console.log('win');
        }
        else{
            console.log('loose');
            vie--;
            document.getElementById('vie').innerHTML="vie"+vie;
        }
    }
    else{
        document.getElementById('vie').innerHTML="defait plus de vie";
    }
}