/*Déclarez trois variables a, b et c comme "1", "2" et a+b. 
Afficher le type et la valeur de chaque variable. Ensuite, forcez le type de a et b à entier et exécuter à nouveau a+b. Afficher le type et la valeur de chaque variable.
Aide : Utiliser la fonction typeof*/

function inputtype(x){
    let y = typeof(x)
document.write(`${x} est de type ${y}`)
document.write('<br>')
}
let a = 'bonjour'
let b = 2
let c = a+b
inputtype(a)
inputtype(b)
inputtype(c) 
let d= Number(a)
let e =Number(b)
let f=Number(c)
inputtype(d)
inputtype(e)
inputtype(f)