let Btncalcul = document.querySelector("#calcul")


Btncalcul.onclick = function (event) {

    let salbrut =Number( document.querySelector("#salbrut").value)
    if ((salbrut <= 0) || (salbrut == 'null')) {
        document.querySelector("#salbrut-error").innerhtml = "please provide your salary"
        salbrut.style.border="1px solid red"
        console.log("erreur")
    } else {
        let impot = salbrut * 0.18;
        let assurance = salbrut * 0.07;
        let regime = salbrut * 0.18;

        let bonus = document.querySelector("bonus")

        bonus.addEventListener('change', function () {
            if (this.checked) {
                salbrut = salbrut + 100
            }
        });

        let allocation = document.querySelector("#allocation")
        allocation.addEventListener('change', function () {
            if (this.checked) {
                salbrut = salbrut - 150
            } 
        });

        //
        let genderbutton = document.querySelectorAll("#input[name=sexe]")
        let genderselected
        for (let button in genderbutton) {
            genderselected = genderbutton.value
            break;
        }
        if (genderselected == "femme") {
            impot = impot * 0.02;
        }
        let nbre = document.querySelector("#nbre").value
        if (nbre == 3) {
            impot = impot * 0.01;
        } else if (nbre == 4) {
            impot = impot * 0.02;
        }

        document.querySelector("#impots").innerHTML = `${impot}`

        document.querySelector("#assurance").innerHTML = `${assurance}`

        document.querySelector("#regime").innerHTML = `${regime}`

    }

}




