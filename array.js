//Antigamente
//var listaAntiga = Array();


let lista = []; //Novo Array
console.log(lista);

// Adicionando Uma lista
// array pode colocar string, numero, boleano

lista.push("Carvão")
lista.push("Sal Grosso")
lista.push("Cerveja")
lista.push("Farinha")
lista.push(10);

console.log(lista);

//index Todo arrey começa com 0 (zero)

console.log(lista[0]); 
// remover da lista
console.log(lista.pop()); //pop sempre remove o ultimo item da lista
console.log(lista.splice(0,1)); //remover uma posiçao especifica
console.log(lista);
console.log(lista.splice(1,0,"Alcool")); 
// primeiro parametro - começa
// segundo parametro - deleta itens
// terceiro adiciona itens

// adicionar item em posiçao especifica
 //utilizando filter
//filtrando informaçoes
//console.log(lista.splice(0,0,"elemento"));
console.log("Utilizando Filter");
console.log(lista.filter(e => e === "Carvão"));

//buscando informaçao com o find
console.log("Utilizando Find");
console.log(lista.find(v => v === "Farinha"));

//obs: find retorna somente um valor especifico e filter retorna uma lista com array

//verificar o tamanho da lista
console.log("Tamanho da lista");
console.log(lista.length); // pego o tamanho da lista
console.log(lista);


let numeros = [1,2,3,4,5,6,7,8,9,10];
const resultado = numeros.map(Math.sqrt) // metodo para matematica com raiz quadrada
console.log("Utilizando a Raiz Quadrada");
console.log(resultado);



