//Dati
// const magiorAge = 18;
// console.log(magiorAge, typeof magiorAge);

// const oldAge = 65;
// console.log(oldAge, typeof oldAge);

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
console.log(submitBtn);
submitBtn.classList.add("rounded");
submitBtn.classList.toggle("fuksia");
submitBtn.classList.add("fw-bold");
console.log(submitBtn.classList);
//prendo l'elemento bottone "reset" e lo salvo in una variabile
const resetBtn = document.getElementById("reset");
console.log(resetBtn);
resetBtn.classList.add("rounded");
resetBtn.classList.toggle("fuksia");
resetBtn.classList.add("fw-bold");
console.log(resetBtn.classList);

//prendo l'elemento html in cui verrà mostrato a console il nome e lo assegno ad una variabile
const name = document.querySelector("p.name");
console.log(name.classList);
name.classList.add("fw-bold");
console.log(name.classList);

//prendo l'elemento html in cui verrà mostrato a console ilnumero della carrozza e lo assegno ad una variabile
const car = document.querySelector("p.car");
console.log(car);
   
//prendo l'elemento html in cui verrà mostrato a console il codice del biglietto e lo assegno ad una variabile
const cod = document.querySelector("p.cod");
console.log(cod);
   
//prendo l'elemento html in cui verrà mostrato a console lo sconto applicato e lo assegno ad una variabile
const pDiscount = document.querySelector("p.discounts");
console.log(pDiscount);
   
//prendo l'elemento html in cui verrà mostrato a console il costo totale e lo assegno ad una variabile
const pCost = document.querySelector("p.cost");
console.log(pCost);

// effetti all'over dei bottoni submit e reset
submitBtn.addEventListener("mouseover", function() {
    submitBtn.classList.add("bor-fuksia");
})

submitBtn.addEventListener("mouseleave", function() {
    submitBtn.classList.remove("bor-fuksia");
})

resetBtn.addEventListener("mouseover", function() {
    resetBtn.classList.add("bor-fuksia");
})

resetBtn.addEventListener("mouseleave", function() {
    resetBtn.classList.remove("bor-fuksia"); 
})
//SVILUPPO
//al click del bottone prendiamo i valori degli imput e  li mostriamo in console su biglietto
   
//Al click su bottone submit
submitBtn.addEventListener("click", function() {
    //prendo il valore dell'input
    const userName = userNameInput.value;
    console.log(userName);
    
    //Inserisco il valore nel paragrafo name
    name.innerHTML = `${userName}`;
    
    //prendo il valore dell'input
    const userKm = parseInt(userKmInput.value);
    console.log(userKm, typeof userKm);
    
    //Inserisco il valore nel paragrafo car
    car.innerHTML = Math.floor(Math.random() * 100) + 1;
    
    //prendo il valore dell'input
    const userAge = userAgeInput.value;
    console.log(userAge, typeof userAge);
    
    //Inserisco il valore nel paragrafo cod
    cod.innerHTML = Math.floor(Math.random() * 100000) + 1;
    
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
    let documentResult = 0;
    let discount = 0;
    switch (userAge) {
        case "minor":
            documentResult = totalPrice - (totalPrice * minorDiscount / 100);
            console.log(documentResult, typeof documentResult);
            discount = minorDiscount;
            //Inserisco il valore nel paragrafo discounts
            pDiscount.innerHTML = `${discount}%`;
            break;
        case "old":
            documentResult = totalPrice - (totalPrice * oldDiscount / 100);
            console.log(documentResult, typeof documentResult);
            discount = oldDiscount;
            //Inserisco il valore nel paragrafo discounts
            pDiscount.innerHTML = `${discount}%`;
            break;    
        default:
            documentResult = totalPrice;
            discount = "Biglietto standard"
            //Inserisco il valore nel paragrafo discounts
            pDiscount.innerHTML = `${discount}`;
            break;
    }

    // //prendo il valore dello sconto
    // const userDiscount = discount;
    // console.log(userDiscount);
  
    // //Inserisco il valore nel paragrafo discounts
    // pDiscount.innerHTML = `${userDiscount}%`;

    //arrotondo ai centesimi il prezzo finale del biglietto
    const rounded = Math.round((documentResult + Number.EPSILON) * 100) / 100;
    console.log(rounded, typeof rounded);
    //prendo il valore del costo totale
    const totalCost = rounded;
    console.log(totalCost);
   
    //Inserisco il valore nel paragrafo cost
    pCost.innerHTML = `${totalCost}€`;
  })
//Al click di reset
  resetBtn.addEventListener("click", function() {

   //ripulisco gli input
   userNameInput.value = "";
   userKmInput.value = "";
   userAgeInput.value = "";
})

   