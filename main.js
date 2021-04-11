// Etape 1 - Sélectionner nos éléments
let prix = document.getElementById('prix');
let form = document.querySelector('#formulaire');
let msg = document.querySelector('small');
// Etape 2 - Cacher l'erreur
msg.style.display='none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleat = Math.floor(Math.random() * 1001);
let coup= 0;
let nombreChoisi;
// Etape 4 - Créer la fonction vérifier
function verifier (nombre){
  let instruction =  document.createElement('div');
  if(nombre<nombreAleat){
    //c'est plus
    //ajouter un contenu 
    instruction.textContent="#  (" +coup+") "+ nombre + " c'est plus!";
    instruction.className='instruction plus';
    
  }
  else if (nombre>nombreAleat){
    //c'est moins
    instruction.textContent="#  (" +coup+") "+ nombre + " c'est moins!";
     instruction.className='instruction moins';
  }
  else{
    //c'est le juste prix
    instruction.textContent="#  (" +coup+") "+ nombre + " félicitations!";
     instruction.className='instruction fini';
    
  }
  document.getElementById('instructions').preppend(instruction);
  
}


// Etape 5 - Vérifier que l'utilisateur donne bien un nombre
prix.addEventListener('keyup',()=>{
  if(isNaN(prix.value)){
    msg.style.display='block';
  }
  else{
    msg.style.display='none';
  }
})
// Etape 6 - Agir à l'envoi du formulaire
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(isNaN(prix.value)|| prix.value ==''){
    
  
    prix.style.borderColor="red";
  }
  else{
    coup++;
    prix.style.borderColor="silver";
    nombreChoisi=prix.value;
    prix.value='';
    verifier(nombreChoisi);
  }
    
})

