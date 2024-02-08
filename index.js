//objeto
const person = {
	name: 'thyson',
	age: 30,
};

//array con objectos
const ArrayWithObject = [
	{
		name: 'pedro',
		Age: 12,
	},
	{
		name: 'maria',
		Age: 13,
	},
];

console.log(ArrayWithObject[1]);
console.log(Object.keys(person));

//concatenar
const perro = 'kira';
const mimensaje = 'hola' + perro;
const mimensaje2 = `hola ${perro} te quiero`;

//funcion
const calcularArea = (alto = 1, ancho = 1, largo = 1) => {
	return alto * ancho * largo;
};

calcularArea();
calcularArea(20);
const response = calcularArea(20, 2);
console.log(response);

//

const ListaDeMercado = [
	{
		name: 'potato',
		price: 10,
	},
	{
		name: 'rice',
		price: 33,
	},
	{
		name: 'salmon',
		price: 55,
	},
	{
		name: 'sushi',
		price: 60,
	},
];

const LoQuePuedoPagar = ListaDeMercado.filter((product) => product.price > 50);
console.log(LoQuePuedoPagar);

//

const personas = [
	{
		name: 'jaud',
		age: 16,
	},
	{
		name: 'Luisa',
		age: 20,
	},
	{
		name: 'isa',
		age: 22,
	},
	{
		name: 'lara',
		age: 18,
	},
];

/* const menorEdad = (arrayDePersonas) => {
	let menorEdad = arrayDePersonas[0].age;

	arrayDePersonas.forEach((persona) => {
		if (menorEdad > persona.age) {
			menorEdad = persona.age;
		}
	});

	return menorEdad;
}; */

//console.log('la menor edad es' + menorEdad(personas));

const sumaredades = (arrayDePersonas) => {
	let TotalActual = 0;
	for (let k = 0; k < arrayDePersonas.length; k++) {
		TotalActual = TotalActual + arrayDePersonas[k].age;
	}
	return TotalActual;

	/* 	arrayDePersonas.forEach((persona) => {
		TotalActual = TotalActual + persona.age;
	});
	return TotalActual; */
};

const resultado = sumaredades(personas);
console.log('la suma de las edades es ' + resultado);
