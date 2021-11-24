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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal ));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form event 
clbtn.addEventListener("click", closemodal );

// close modal form 
function closemodal(){
  modalbg.style.display ="none";
}


subbtn.addEventListener("click" ,finaltest);
function finaltest(){
  if(nom("last") == false){
    modalbg.style.display = "block";
    alert ("ok");
    
  }
  else if (nom("first") == false){
    modalbg.style.display = "block";
    alert ("ok");
    
  }
  else{
    modalbg.style.display = "block";
    alert ("ok");
  }

}



// subbtn.addEventListener("click",function(){
//   console.log("rentrer dans la fonction");

//   if(nom("last")){
//     alert ( "ok1");
//   }
//   if(nom("first")){
//     alert ( "ok2");
//   }
 

// } 
// );

// test du prenom et nom 
function nom(last) {
  var firstname =document.getElementById(last).value;
  var pre = /^[a-z]+$/i;
  if( !pre.test( firstname ) ) {
    // alert("Erreur pour le "+last+" : veillez mettre que des lettre ")
    // document.getElementById('erfirst').innerHTML = 'coucou' ;
    return false;
 } else {
  // alert(firstname);
  return true;
  }
}
//  test de l'eamail 
function email () {
  var mail =document.getElementById("email").value;
  const regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!regemail.test(mail)){
    alert("erreur email");
    return false;
  } else{
    alert("valide");
    return false;
  }

}

// test pour l'age

// subbtn.addEventListener("click", obligatoir
// );


function date(){
   age =document.getElementById("birthdate").value;
  const regdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
   years = age.substring(0,4);
   month = age.substring(5,7) -1;
   day = age.substring(8,10);
   var today = new Date();
   var birth = today.getFullYear() - years;

  if (!regdate.test(age)){
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      birth--;  
    }
    alert(birth);
  }
}
// nombre de tournoius 
function tournois(){
  var nbtournois = document.getElementById("quantity").value;
 tailltournois = nbtournois.length;
 if (tailltournois == 0){
   alert ("faux")
 }
 else{
   alert ("vrais")
 }

}

// villle du concoure 
function ville (){
  if (document.getElementById("location1").checked == true | document.getElementById("location2").checked == true |document.getElementById("location3").checked == true |document.getElementById("location4").checked == true | document.getElementById("location5").checked == true | document.getElementById("location6").checked == true)
  {
    alert ("1")
  }
}


// condition d'utulisateur 

function obligatoir (){
  if (document.getElementById("checkbox1").checked == false)
  {
    alert("2")
  }
}
