// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
// ### 2. Affiche le titreNiv3
// ### 3. Affiche l'élément qui précède le titreNiv3
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling


// ### 5. Affiche le parent des éléments ayant comme class "important" 
// ### 6. Affiche le premier enfant, du parent de "listElements"

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"




// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 


// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
// ### 10. En partant de Nicolas, affiche Primo
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle

//1
// let content = document.getElementById("content");
// console.log(content.children[0]); 
// //2
// let deuxieme = document.getElementById("titreNiv3").innerHTML;
// console.log(deuxieme);
// //3
// let troisieme = document.getElementById("titreNiv3").previousElementSibling;
// console.log(troisieme);
// //4
// let petitParagraphe = document.getElementsByClassName("petitParagraphe")[0];
// console.log(petitParagraphe.nextElementSibling);
// //5
// let parent = document.getElementsByClassName("important")[0].parentElement;
// console.log(parent);
//6
// let enfant = document.getElementById("listElements").children[0]
// console.log(enfant);
// //7
// let sept = document.getElementsByClassName("important")[3];
// console.log(sept.nextElementSibling);
//8
// let huit = document.getElementById("textGeneral")
// console.log(huit.nextElementSibling.innerHTML);
// //9
// let neuf = document.getElementsByTagName("span")[2];
// console.log(neuf);

//10
// let dix = document.getElementsByTagName("b")[1];
// console.log(dix);

// //11 
// let onze = document.querySelector(".grandParagraphe");
// console.log(onze);


// //12


// let douze = document.getElementsByTagName("li");
// for (let i = 0; i< douze.length; i++) {
//     console.log(douze[i])
    
// }

