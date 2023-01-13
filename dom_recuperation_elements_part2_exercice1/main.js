
// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)


let premier = document.getElementsByClassName("tartine")[0].innerHTML;
console.log(premier);

let second = document.getElementById("toast").innerHTML;
console.log(second);

let troisieme = document.getElementsByClassName("tartine")[1]
console.log(troisieme);