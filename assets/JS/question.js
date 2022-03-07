let question = [
'(java) a quoi une structur "switch" ?',
"(php) c'est quoi une procedure ?",
"(web )flex-grow sert a ?"
];
let reponse = [
['crée un superControlleur','eviter la répétition de if et else','permettre de mieux lire le code ','c est quoi un switch'],
['permet de retourner une valeur','retourne plusieur valeur','retourne rien','retourne le nom de la variable'],
['s agrandir a la taille max de sont container','agrandir a la taille max de la page','agrandir a la taille max du padding','diminuer la taille du container']];
let bonneReponse = [
'eviter la répétition de if et else',
'retourne rien',
's"agrandir a la taille max de sont container'];
let reponseU;
var random;
var vie =3;
test = affichage();
function affichage(){
    var taille_tableaux=question.length;
    random= Math.floor(Math.random() * taille_tableaux);
    var textQ= question[random];
    document.getElementById('question').innerHTML =textQ;
    var hh= reponse[random][0];
    if(taille_tableaux !=0){
        for (var i=0;i<=reponse[random].length;i++){
            document.getElementById('vie').innerHTML= "vie :"+vie;
            document.getElementById('reponse1').innerHTML ="<input class=\"bouton\" id='test0' type=\"button\" OnClick=\"correct('0')\" value="+reponse[random][0]+">";
            document.getElementById('reponse2').innerHTML ="<input class=\"bouton\" id='test1' type=\"button\" OnClick=\"correct('1')\"  value="+reponse[random][1]+">";
            document.getElementById('reponse3').innerHTML ="<input class=\"bouton\" id='test2' type=\"button\" OnClick=\"correct('2')\" value="+reponse[random][2]+">";
            document.getElementById('reponse4').innerHTML ="<input class=\"bouton\" id='test3' type=\"button\" OnClick=\"correct('3')\" value="+reponse[random][3]+">";
        }
    }
}
function correct(reponseUtilisateur){
        var value1=document.getElementById("test"+reponseUtilisateur);
        value1=value1.value;
        var bonneReponse1=bonneReponse[random];
    if(vie!=0){
        if(value1==bonneReponse[random]){
            question.splice(random,1);
            reponse.splice(random,1);
            return affichage();
        }
        else{
            vie--;
            document.getElementById('vie').innerHTML="vie :"+vie;
            question.splice(random,1);
            reponse.splice(random,1);
            if(vie>=0){
                return affichage();
            }
            else{
                console.log('ok t as perdu');
            }
        }
    }
    else{
        document.getElementById('vie').innerHTML="defait plus de vie";
        alert("you loose");
        document.getElementById('recommancer').innerHTML="<input class=\"bouton\" id='reload' type=\"button\" OnClick=\"reload()\" value=recommancer>";;

    }
}
function reload(){
    window.location.reload();
}