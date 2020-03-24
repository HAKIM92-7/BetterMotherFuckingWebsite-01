


const button = document.getElementById('button1');

button.addEventListener('click', event => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;   //nombre de click  
});






let mypage=document.querySelector('html');
let myButton = document.getElementById('button1');    //reference sur le bouton crée
let myHeading = document.querySelector('h1');      //reference sur le titre de la page


function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);                                // demander à l'utilisateur de saisir son nom
    myHeading.textContent = 'BetterMotherFuckingWebsite est cool , ' + myName;
  }

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'BetterMotherFuckingWebsite est cool , ' + storedName;
  } 
 
  myButton.addEventListener('click', function() {
    setUserName();
  });


  

function visitwebsite()
{  let Mychoice = prompt ('voulez vous visiter le fameux site xxxvidsxxx? o/n'); 
   localStorage.setItem('reponse',Mychoice);
                                                                                        //visiter le site ou non

}
visitwebsite();
let choice=localStorage.getItem('reponse');

if (choice ==='o') { window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); } //redirect vers youtube



let myinscription=document.getElementById('inscrire');


myinscription.addEventListener ('click',function() { 
window.location.href="documents/formulaire.html";
});




