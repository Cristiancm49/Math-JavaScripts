const btn = document.querySelector('#calcular');
const inputCupon = document.querySelector('#cupon');
const inputPrice = document.querySelector('#price');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento () {
    const price = Number(inputPrice.value);
    const cupon = inputCupon.value;

    if(!price || !cupon) {
        pResult.innerText = 'Llenar el formulario'
        return;
    } 

    // const cuponesDescuento = {
    //     'as': 15,
    //     'sa': 18,
    //     'valen': 45,
    // }

const cuponesList = [];

cuponesList.push({
    name:'as',
    discount: 15,
})

cuponesList.push({
    name:'es',
    discount: 25,
})

cuponesList.push({
    name:'is',
    discount: 35,
})
let discount;
function descuento (arrayElemet) {
    return arrayElemet.name == cupon;

}

const cuponArray = cuponesList.filter(descuento)
    

    if (cuponArray.length > 0) {
        discount = cuponArray[0].discount;

    } else {
        pResult.innerText = "El cupon no es valido"
        return;
    }

    console.log({
        cuponArray,
        discount,
        cupon,
    })
    // if (cupon == "c") {
    //     discount = 45;
    // } else if (cupon == 'V') {
    //     discount = 65;
    // } else {
    //     pResult.innerText = "el cupon no es valido"
    //     return;
    // }

    const newPrice = (price *(100 - discount) ) / 100;
    pResult.innerText = 'El nuevo precio es de $' + newPrice;

    const users = [];

    users.push({
        id:123,
        name: 'Juanito Alcachofa',
    })

    users.push({
        id:456,
        name: 'Juanita Alcachofa',
    })

    const userId = 456


    function BuscarUser (idUser, userId) {
        if (idUser.id == userId) {
            return users.name;
        } else {
        return false;
    }




    }}
    const nameUser = users.find(BuscarUser)
    console.log(nameUser)