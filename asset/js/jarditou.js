$(document).ready(function(){
    
    $("#envoi").click(function(){
       
        f_valid();
    });



function f_valid() {
var envoi=true;

    var prenom = $("#prenom").val();
if(prenom===""){
    envoi=false;
    alert("Entrez votre prénom s.v.p");
}


   
    var cp = $("#cp").val();
    if(cp===""){
        envoi=false;
        alert("Entrez votre code postale s.v.p");
    }
  
   


    var mail = $("#mail").val();
    if(mail===""){
        envoi=false;
        alert("Entrez votre email s.v.p");
    }
   
   
    
    var date = $("#date").val();
    if(date===""){
        envoi=false;
        alert("Entrez votre date de naissance s.v.p");
    }
  
   

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


function f_valid() {
var envoi=true;

    var prenom = $("#prenom").val();
if(prenom===""){
    envoi=false;
    $("#n").show();
    e.preventDefault();
}
else{
    $("#n").hide();
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
   


    var mail = $("#mail").val();
    if(mail===""){
        envoi=false;
        alert("Entrez votre email s.v.p");
    }
   
   
    
    var date = $("#date").val();
    if(date===""){
        envoi=false;
        alert("Entrez votre date de naissance s.v.p");
    }
  
   

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
        $("#n").show();
        e.preventDefault();
    }
 
   
    var nom =$("#nom").val();
    if(nom===""){
        envoie=false;
        $("#n").show();
        e.preventDefault();
    }

    if(envoi==true){
        
    }
 
    
};

};

});

