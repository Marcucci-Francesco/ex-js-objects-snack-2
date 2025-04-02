
/* 
🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
​
console.log(hamburger.name); // ? 
console.log(secondBurger.name ); // ?


Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.name); // ?  'Double Cheese Burger'
console.log(secondBurger.name ); // ? 500

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

È stato creato un solo oggetto in memoria, assegnato a due variabili.
*/


/*
🏆 Code Question 2

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?


P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.ingredients[0]); // ?  "Salad"
console.log(secondBurger.ingredients[0]); // ?  "Salad"

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati due oggetti in memoria, uno per ogni variabile assegnata.
*/



/*
🏆 Code Question 3

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati 3 oggetti in memoria, uno per ogni variabile assegnata, con le relative proprietà annidate.
*/




/*
🏆 Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};


Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Il metodo migliore per clonare l'oggetto chef è lo spread operator, perchè l'oggetto chef non contiene proprietà annidate e contiene una funzione.

Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

Il metodo migliore per clonare l'oggetto restaurant è utilizzare la structuredClone, perchè contiene delle proprietà annidate e una data.

*/




/*
🎯 Code Question 5 (Bonus)

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?


Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

console.log(hamburger.maker.name); // ?  "Chef Hyur"
console.log(secondBurger.maker.name); // ?  "Chef Hyur"
console.log(hamburger.maker.restaurant.name); // ?  "Hyur's Burgers"
console.log(secondBurger.maker.restaurant.name); // ? "Hyur's II"

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Sono stati creati 3 oggetti in memoria, uno per ogni variabile assegnata con le relative proprietà annidate.
*/



/*
🎯 Code Question 6 (Bonus)

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}


Qual è il metodo migliore per clonare l’oggetto chef, e perché?

Il metodo migliore per clonare l'oggetto chef è lo spread perchè quest'ultimo contiene proprietà annidate e delle funzioni.
*/



/*
🎯 Snack  (Bonus)
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

*/