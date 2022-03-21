

let numContainer = document.getElementById('num');
let value = 1;
let btnsInc = document.querySelector('.inc');
let btnsDec = document.querySelector('.dec');

btnsInc.addEventListener("click", (event) =>{value++;numContainer.textContent = value
    event.preventDefault()
});

btnsDec.addEventListener("click", (event) =>{value--;numContainer.textContent = value
    event.preventDefault()
})