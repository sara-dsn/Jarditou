$(document).ready(function(){
    
    $("#envoi").click(function(){
       
        f_valid();
    });



function f_valid() {
var envoi=true;

    var prenom = $("#prenom").val();
    if(prenom===""){
        envoi=false;
        $("#p").show();
        e.preventDefault();
    }
    else{
        $("#p").hide();
        document.forms[0].submit();
    };


   
    var cp = $("#cp").val();
    if(cp===""){
        envoi=false;
        $("#c").show();
        e.preventDefault();
    }
    else{
        $("#c").hide();
        document.forms[0].submit();
    };
  
   


    var email = $("#mail").val();
    if(email===""){
        envoi=false;
        $("#e").show();
        e.preventDefault();
    }
    else{
        $("#e").hide();
        document.forms[0].submit();
    };
   
   
    
    var date = $("#date").val();
    if(date===""){
        envoi=false;
        $("#d").show();
        e.preventDefault();
    }
    else{
        $("#d").hide();
        document.forms[0].submit();
    };
   

    var question = $("#question").val();
if(question===""){
        envoi=false;
        alert("Entrez votre question s.v.p");
    }
  
   
    var genre=$("input[name='genre']:checked").val();
    if(genre===undefined){
        envoi=false;
        alert("Veuillez séléctionner votre genre s.v.p");
    }
   
  

    var sujet=$("input[name='sujet']:checked").val();
    if(sujet===undefined){
        envoi=false;
        alert("Veuillez séléctionner un sujet s.v.p");
    }
 
   
    var ok= $("#ok").prop("checked");
   if(!ok){
        envoi=false;
        alert("cocher la case s.v.p");
    }
 
$(document).ready(function(){
    $("#formulaire").click(function(e){
        f_valid();
    });
});
};
});
