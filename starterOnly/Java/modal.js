function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const subbtn = document.querySelector(".btn-submit");
const clbtn = document.querySelector(".close-btn");
const modalbody = document.querySelector(".modal-body");
const content = document.querySelector(".content");
const validation = document.querySelector(".validation");
const fermer = document.querySelector(".closeb");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal ));

// launch modal form
function launchModal() {
  // rest de la modal 
  document.getElementById("cform").reset();
  content.style.height ="auto";
  modalbody.style.display ="block";
  fermer.style.display ="none";
  validation.style.display ="none";
  modalbg.style.display = "block";
}

// close modal form event 
clbtn.addEventListener("click", closemodal );
fermer.addEventListener("click",closemodal);

// close modal form 
function closemodal(){
  modalbg.style.display ="none";
}

// fonction pour lancer tous les fonctions avec le bouton c'est parti 
var test ;
function finaltest()
{
  test = 0;
nom("last");
nom("first");
email();
date();
tournois();
ville();
obligatoir();
// verification des tests
console.log(test);
 if (test ==0)  {
  modalbody.style.display ="none";
  document.getElementById("closeb").style.display="inline-block"
  content.style.height ="20em";
  validation.style.display ="inline-block";
  }
}



// test du prenom et nom 
function nom(last) {
  var firstname =document.getElementById(last).value;
  //regex lettre 
  var pre = /^[a-z]+$/i;
  if( !pre.test( firstname ) ) {
    //message d'erreur 
    document.getElementById('er'+last+'').innerHTML = 'Champ incorrect' ;    
    document.getElementById(last).style.borderColor="red";
    test++;

 } else {
  document.getElementById('er'+last+'').innerHTML = '' ; 
  document.getElementById(last).style.borderColor="initial";
  
  }
}
//  test pour  l'email 
function email () {
  var mail =document.getElementById("email").value;
  // regex @ et . obligatoir 
  const regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!regemail.test(mail)){
    // message d'erreur 
    document.getElementById('ermail').innerHTML ="Adresse mail incorrecte "; 
    document.getElementById("email").style.borderColor="red";
    test++;
  } else{
    document.getElementById("email").style.borderColor="initial";
    document.getElementById('ermail').innerHTML ="";  
  }

}

// test pour l'age

function date(){
   age =document.getElementById("birthdate").value;
   //regex nombre 
  const regdate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  // recuperation du jour / mois / annees dans différentes variables 
   years = age.substring(0,4);
   month = age.substring(5,7) -1;
   day = age.substring(8,10);
   var today = new Date();
   var birth = today.getFullYear() - years;
  // test pour de la regex 
  if (!regdate.test(age)){
    // message d'erreur 
    document.getElementById("birthdate").style.borderColor="red";
    document.getElementById('erage').innerHTML ="Date incorrecte";
    test++;
  }
  else if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    birth--; 
  }
  // test de l'age 
    else if (birth <= 17) {
      // message d'erreur
      document.getElementById("birthdate").style.borderColor="red";
      document.getElementById('erage').innerHTML ="Le tournoi est interdit aux mineurs ";
      test++;
    }
    else {
      document.getElementById("birthdate").style.borderColor="initial";
      document.getElementById('erage').innerHTML ="";
    }
  
}
// test pour le tournois
function tournois(){
  // regex - interdit et verification d'une valeur 
  let regtournois = /^\d*[0-9]\d*$/;
  var nbtournois = document.getElementById("quantity").value;
 if (!regtournois.test(nbtournois) || nbtournois>99){
   //message d'erreur 
   document.getElementById("quantity").style.borderColor="red";
  document.getElementById('ertournois').innerHTML ="Veuillez remplir le champ";
  test++;
 }
 else{
  document.getElementById("quantity").style.borderColor="initial";
  document.getElementById('ertournois').innerHTML ="";
 }

}

// test de la ville pour le concours 
function ville (){
  let ischecked = false;
  // verification des checkbox 
  for(let i = 1;i < 7;i++ ){
if (document.getElementById("location"+i).checked == true)
{
 ischecked = true;
}
  }
  if (ischecked)
  {
    document.getElementById('erville').innerHTML ="";
  }
  else
  {
    // message d'erreur 
    document.getElementById('erville').innerHTML ="Une ville est nécessaire ";
    test++;
  }
}


// test de la condition d'utilisateur 

function obligatoir (){
  // verification  de la checkbox 
  if (document.getElementById("checkbox1").checked == false)
  {
    //message d'erreur
    document.getElementById('erobligatoir').innerHTML ="Condition d'utilisateur obligatoire";
    test++;
  }
  else{
    document.getElementById('erobligatoir').innerHTML ="";
  }
}
