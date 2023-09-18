// Localisation Affichage et Effacer
const clearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('[data-output]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

// Appel de la fonction
clearButton.addEventListener('click', () =>{
    console.info('effacer')
    clear()
})

// Fonction pour effacer
function clear(){
    output.innerText=''
}

// Fonction pour afficher les nombres
function appendNumber(number){
    console.info(number)
    output.innerText = output.innerText +  number
}

// Fonction pour parcourir les boutons
numberButtons.forEach(button => { // Pour chaque bouton
    button.addEventListener('click', () => { // On créer un detecteur
        console.info(button.innerText) // au clique, on affiche le contenu du btn dans la console
        appendNumber(button.innerText)
    })
})

// On surveille le clique sur un des boutons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

// declaration de la variable à mettre en tout debut de script
var OperationCalcul = undefined

// fonction qui affiche le signe de l'opération dans la zone "output"
function chooseOperation(operation) {
    output.innerText = output.innerText.toString() + '' + operation + ''
}

//
function clear() {
    output.innerText = ''
    OperationCalcul = undefined
}

//
function chooseOperation(operation) {
    if(output.innerText.includes('x') || output.innerText.includes('+') 
    || output.innerText.includes('-') || output.innerText.includes('/')) return
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}

//
equalsButton.addEventListener('click', button => {
    calcul()
})

//

function calcul() {

    if(output.innerText === '') return
    let split = output.innerHTML.split(OperationCalcul)
   
   // recupération des 2 valeurs
    let nombre1 = parseFloat(split[0])
    let nombre2 = parseFloat(split[1])
    
    // verification qu'il y a bien eu des valeurs de saisies
    if (isNaN(nombre1) || isNaN(nombre2)) return
    
    console.log(nombre1)
    console.log(nombre2)
    console.log(OperationCalcul)

    let moncalcul;
    
    switch (OperationCalcul) {
        case '+':
            moncalcul =  nombre1 + nombre2 
            break
        case '-':
            moncalcul =  nombre1 - nombre2 
            break
        case 'x':
            moncalcul =  nombre1 * nombre2
            break
        case '/':
            moncalcul =  nombre1 / nombre2
            break
        default:
            return
    }
    console.info(moncalcul)
    
    output.innerText = moncalcul
    OperationCalcul = undefined
}
