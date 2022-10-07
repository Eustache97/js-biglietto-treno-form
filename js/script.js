//Dati
const magiorAge = 18;
console.log(magiorAge, typeof magiorAge);

const oldAge = 65;
console.log(oldAge, typeof oldAge);

const priceAtKm = 0.21;
console.log(priceAtKm, typeof priceAtKm);

const minorDiscount = 20;
console.log(minorDiscount, typeof minorDiscount);

const oldDiscount = 40;
console.log(oldDiscount, typeof oldDiscount);

//Prendo il nome e cognome del passegero e lo salvo in una variabile
const userNameInput = document.getElementById("user-name");

//Prendo i chilometri da percorrere e lo salvo in una variabile
const userKmInput = document.getElementById("user-km");
console.log(userKmInput, typeof userKmInput);

//Prendo l'età del passeggero e lo salvo in una variabile
const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput, typeof userAgeInput);

//prendo l'elemento bottone "submit" e lo salvo in una variabile
const submitBtn = document.getElementById("submit");

//prendo l'elemento bottone "reset" e lo salvo in una variabile
const resetBtn = document.getElementById("reset");


//prendo l'elemento html in cui verrà mostrato a console il nome e lo assegno ad una variabile
const name = document.querySelector("p.name");
console.log(name);

//prendo l'elemento html in cui verrà mostrato a console i chilometri e lo assegno ad una variabile
const km = document.querySelector("p.km");
console.log(km);
   
//prendo l'elemento html in cui verrà mostrato a console l'età del passeggero e lo assegno ad una variabile
const age = document.querySelector("p.age");
console.log(age);
   
//prendo l'elemento html in cui verrà mostrato a console lo sconto applicato e lo assegno ad una variabile
const pDiscount = document.querySelector("p.discounts");
console.log(pDiscount);
   
//prendo l'elemento html in cui verrà mostrato a console il costo totale e lo assegno ad una variabile
const pCost = document.querySelector("p.cost");
console.log(pCost);


   //SVILUPPO
   //al click del bottone prendiamo i valori degli imput e  li mostriamo in console su biglietto
   
   //Al click su bottone submit
   submitBtn.addEventListener("click", function() {
    //prendo il valore dell'input
    const userName = userNameInput.value;
    console.log(userName);
    
    //Inserisco il valore nel paragrafo name
    name.innerHTML = `Nome passeggero: ${userName}`;
    
    //prendo il valore dell'input
    const userKm = parseInt(userKmInput.value);
    console.log(userKm, typeof userKm);
    
    //Inserisco il valore nel paragrafo km
    km.innerHTML = `Chilometri da percorrere: ${userKm}`;
    
    //prendo il valore dell'input
    const userAge = parseInt(userAgeInput.value);
    console.log(userAge, typeof userAge);
    
    //Inserisco il valore nel paragrafo km
    age.innerHTML = `Età passegero: ${userAge}`;
    
    //in base ai chilometri dati in input dall'utente moltiplico per il prezzo a kilometro e ottengo il prezzo base
    const totalPrice = userKm * priceAtKm;
    console.log(totalPrice, typeof totalPrice);
    
    //ripulisco gli input
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";
    
    //SE l'età del passeggeroè minore di 18 applico al prezzo lo sconto del 20% e mostro a schermo il prezzo scontato
    //ALTRIMENTI SE l'età del passeggero è maggiore di 65 applico al prezzo lo sconto del 40% e mostro a schermo il prezzo scontato
    // ALTRIMENTI mostro a schermo il prezzo base
    let documentResult = totalPrice;
    let discount = 0;

    if (userAge < magiorAge) {
    documentResult = totalPrice - (totalPrice * minorDiscount / 100);
       console.log(documentResult, typeof documentResult);
        discount = minorDiscount;

  } else if(userAge > oldAge){
    documentResult = totalPrice - (totalPrice * oldDiscount / 100);
      console.log(documentResult, typeof documentResult);
      discount = oldDiscount; 
    }

      //prendo il valore dello sconto
      const userDiscount = discount;
      console.log(userDiscount);
  
      //Inserisco il valore nel paragrafo discounts
      pDiscount.innerHTML = `Sconto: ${userDiscount}%`;

      //arrotondo ai centesimi il prezzo finale del biglietto
      const rounded = Math.round((documentResult + Number.EPSILON) * 100) / 100;
      console.log(rounded, typeof rounded);
      //prendo il valore del costo totale
       const totalCost = rounded;
       console.log(totalCost);
   
       //Inserisco il valore nel paragrafo cost
       pCost.innerHTML = `Costo biglietto: ${totalCost}`;
  })
//Al click di reset
  resetBtn.addEventListener("click", function() {

   //ripulisco gli input
   userNameInput.value = "";
   userKmInput.value = "";
   userAgeInput.value = "";
})

   