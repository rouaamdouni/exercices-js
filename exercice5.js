let verify=document.querySelector("#verify")
let y =Math.random() *100;
let result = document.querySelector("#result")
function verifier(){
for(let i=1;i<5;i++)
{
    let x = Number(document.querySelector("#nombre").value)
if(x==y)
{
    result.innerHTML = `vous avez gagné , nombre d'essai = ${i}`
}else if(x<y) {
    result.innerHTML = `${x} est plus petit que le nombre cherché `
}else{
    result.innerHTML = `${x} est plus grand que le nombre cherché ` 
}
}
}
verify.onclick=verifier