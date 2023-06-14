const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m



const formBtn = document.querySelector('.form-btn')
const displayBMI = document.querySelector('.bmi-value')
const description = document.querySelector('.description')
formBtn.addEventListener('click', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const height = inputs[0]
    const weight = inputs[1]

    // Validation du formulaire
    // falsy : 0 '' undefined null
    if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
        handleError()
        return
    }

    // calcul BMI
    const bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(1)
    showResult(bmi)
}

//
function showResult(bmi) {
    let rank;
    for (let i = 0; i < BMIData.length; i++) {
        const data = BMIData[i];
        if (bmi > data.range[0] && bmi <= data.range[1]) {
            rank = data
            break
        } else if (typeof data.range === 'number' && data.range >= 40) {
            rank = data;
        }
    }

    displayBMI.textContent = bmi;
    displayBMI.style.color = rank.color;
    description.textContent = rank.name;
}

function handleError() {
    displayBMI.textContent = "Echec"
    description.textContent = "Remplissez correctement le formulaire"
}




/////////LEXIQUE////////////

//1/ || = OU // Commande Mac = Alt + Maj + L

//2/ Math.pow() = renvoie un nombre à une certaine puissance //Puissance 2

//3/L'opérateur ET logique (&&) (conjonction logique) renvoie vrai si et uniquement si ses deux opérandes sont true ou équivalents à true. Il est généralement utilisé avec des valeurs booléennes et, quand c'est le cas, il renvoie une valeur booléenne. Toutefois, l'opérateur && renvoie en fait la valeur d'un de ses opérandes et, si cet opérateur est utilisé avec des valeurs non-booléennes, il renverra une valeur non-booléenne.

//4/ event.preventDefault();
// La méthode preventDefault(), rattachée à l'interface Event, indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.

// L'évènement continue sa propagation habituelle à moins qu'un des gestionnaires d'évènement invoque stopPropagation() ou stopImmediatePropagation() pour interrompre la propagation.

// Comme indiqué ci-après, appeler preventDefault() n'aura aucun effet pour un évènement qui ne peut être annulé (comme ceux émis par EventTarget.dispatchEvent() sans avoir indiqué cancelable: true).

//5/L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.

// Number
// string
// Boolean