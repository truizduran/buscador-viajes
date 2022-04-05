

let numContainer = document.getElementById('num');
let value = 0;
let btnsInc = document.querySelector('#inc');
let btnsDec = document.querySelector('#dec');

btnsInc.addEventListener("click", e =>{value++;numContainer.textContent = value
    e.preventDefault()
});

btnsDec.addEventListener("click", e =>{value--;numContainer.textContent = value
    e.preventDefault()
})