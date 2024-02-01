
const hamburberImage = document.getElementById('hamburberImage');
const drinksImage = document.getElementById('drinksImage');
const mainMenu = document.getElementById('mainMenu');
const drinks = document.getElementById('drinks');
const mainMenuAppear = document.getElementById('mainMenuAppear');
const drinkMenuAppear = document.getElementById('drinkMenuAppear');


console.log(hamburberImage);
console.log(drinksImage);
console.log(mainMenu);
console.log(drinks);
console.log(mainMenuAppear);
console.log(drinkMenuAppear);

mainMenu.addEventListener('click', () =>{
    hamburberImage.classList.add('none');
    mainMenuAppear.classList.remove('none');
    mainMenuAppear.style.width='100%';
    
})

drinks.addEventListener('click', () =>{
    drinksImage.classList.add('none');
    drinkMenuAppear.classList.remove('none');
    drinkMenuAppear.style.width='100%';

})