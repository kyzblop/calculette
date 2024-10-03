var resultat = 0; 
var nb1 = 0;
var nb2 = 0;
var operation; // Determine l'opération en cours
var premier = true; // Determine s'il s'agit du début du calcul
var error = false;

var reset = true;


var tab = []


// Affichage des chiffres lors des cliques sur les touches
document.getElementById("chif1").addEventListener("click", () => {
    let text = document.getElementById('textEcran')

    if(reset = true){
        text.innerHTML = "1"
    } else {
        text.innerHTML = text.textContent + "1"
    }

    reset = false;
    
});


document.getElementById("chif2").addEventListener("click", () => {
    let text = document.getElementById("textEcran")

    if(reset == true){
        text.innerHTML = "2"
    } else {
        text.innerHTML = text.textContent + "2"
    }

    reset = false;
    
});


document.getElementById("chif3").addEventListener("click", () => {
    let text = document.getElementById("textEcran")

    if(reset == true){
        text.innerHTML = "3"
    } else {
        text.innerHTML = text.textContent + "3"
    }

    reset = false;
});


document.getElementById("chif4").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "4"
    } else {
        text.innerHTML = text.textContent + "4"
    }

    reset = false;
});


document.getElementById("chif5").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "5"
    } else {
        text.innerHTML = text.textContent + "5"
    }

    reset = false;
});


document.getElementById("chif6").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "6"
    } else {
        text.innerHTML = text.textContent + "6"
    }

    reset = false;
});


document.getElementById("chif7").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "7"
    } else {
        text.innerHTML = text.textContent + "7"
    }

    reset = false;
});


document.getElementById("chif8").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "8"
    } else {
        text.innerHTML = text.textContent + "8"
    }

    reset = false;
});


document.getElementById("chif9").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "9"
    } else {
        text.innerHTML = text.textContent + "9"
    }

    reset = false;
});


document.getElementById("chif0").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    
    if(reset == true){
        text.innerHTML = "0"
    } else {
        text.innerHTML = text.textContent + "0"
    }

    reset = false;
});

document.getElementById("virgule").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    text.innerHTML = text.textContent + "."
});


// Calcul
function calcul(){

    
    if(premier){
        let text = document.getElementById("textEcran")
        nb1 = parseFloat(text.textContent);
        
        resultat = nb1
    } else {
        let text = document.getElementById("textEcran")
        nb2 = parseFloat(text.textContent);

        if(operation == "addition"){
            resultat = nb1 + nb2
        } else if(operation == "soustraction"){
            resultat = nb1 - nb2
        } else if(operation == "multiplication"){
            resultat = nb1 * nb2
        } else if(operation == "division"){
            if(nb2 == 0){
                error = true; 
            } else {
                resultat = nb1 / nb2
            }
        } else if(operation == "pourcentage"){
            resultat = (nb1/100) * nb2
        }
        
        nb1 = resultat
    }
    
}



// Operations : la fonction calcul est appellée à chaque clique sur les opérateurs pour garder le resultat
// en mémoire et continuer les calculs sans faire égal
document.getElementById("addition").addEventListener("click", () => {
    calcul()
    operation = "addition"
    let text = document.getElementById("textEcran")
    text.innerHTML = ""
    premier = false
});


document.getElementById("soustraction").addEventListener("click", () => {
    calcul()
    operation = "soustraction"
    let text = document.getElementById("textEcran")
    text.innerHTML = ""
    premier = false
});


document.getElementById("multiplication").addEventListener("click", () => {
    calcul()
    operation = "multiplication"
    let text = document.getElementById("textEcran")
    text.innerHTML = ""
    premier = false
});


document.getElementById("division").addEventListener("click", () => {
    calcul()
    operation = "division"
    let text = document.getElementById("textEcran")
    text.innerHTML = ""
    premier = false
});


document.getElementById("egal").addEventListener("click", () => {
    calcul()
    if(error == true){
        document.getElementById("textEcran").innerHTML = "Error division par zero"

        reset = true;
        console.log(reset)
    } else {
        let text = document.getElementById("textEcran")
        text.innerHTML = resultat
        operation = ""
    }
    error = false;
});


document.getElementById("effacer").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    text.innerHTML = "0"
    resultat = 0
    nb2 = 0;
    premier = true
    operation = ""
    reset = true;
});


document.getElementById("pourcentage").addEventListener("click", () => {
    calcul()
    operation = "pourcentage"
    let text = document.getElementById("textEcran")
    text.innerHTML = ""
    premier = false
});


// Calcul de moyenne
document.getElementById("moyenne").addEventListener("click", () => {
    
    if(tab[0] == null){
        document.getElementById("textEcran").innerHTML = "Error liste vide"
        reset = true;
    } else {
        let text = document.getElementById("textEcran")
        let sum = 0
        for(i=0; i<tab.length; i++){
            sum = sum + tab[i]
        }

        resultat = (sum/tab.length)

        text.innerHTML = resultat

        tab = []
    }
    
})

// L'ajout dans la liste permet de faire la moyenne de tous les elements de la liste
document.getElementById("ajoutListe").addEventListener("click", () => {
    let text = document.getElementById("textEcran")
    tab.push(parseFloat(text.textContent))
    text.innerHTML = "0"
})





