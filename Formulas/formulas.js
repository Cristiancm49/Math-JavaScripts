const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrada = ladoCuadrado * ladoCuadrado;


console.log({
    perimetroCuadrado,
    areaCuadrada,
    ladoCuadrado,
});


function calcularTriangulo (lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

function calcularAlturaTriangulo (lados, base) {
    if (lados == base) {
        console.warn("Esto no es un triangulo isoceles")
    }
    else {
       return Math.sqrt((lados ** 2) - ( (base ** 2) ) /4);
    }
}

function prueba (a, b ,c) {
    if(a == b || a == c || b == c) {
        return false;
    } else {
        const s = ((a + b + c) / 2 );
        const ha = (2/a) * (Math.sqrt( s*(s-a)*(s-b)*(s-c)));
        const hb = (2/b) * (Math.sqrt( s*(s-a)*(s-b)*(s-c)));
        const hc = (2/c) * (Math.sqrt( s*(s-a)*(s-b)*(s-c)));
        
        return(Math.round(ha))
        
     
    }
        

}