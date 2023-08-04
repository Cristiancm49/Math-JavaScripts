const btn = document.querySelector('#calcular');
const inputDescount = document.querySelector('#discount');
const inputPrice = document.querySelector('#price');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento () {
    const price = Number(inputPrice.value);
    const discount = Number(inputDescount.value);

    if(!price || !discount) {
        pResult.innerText = 'Ecribe algun valor numerico'
    } else if (discount > 80) {
        pResult.innerHTML = 'Descuento no valido'
    } else {
        const newPrice = (price * discount) / 100;
        pResult.innerText = 'El nuevo precio es de $' + newPrice;
    }




}