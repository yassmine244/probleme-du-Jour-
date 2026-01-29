// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.
function estPair(nombre) {
  if (nombre % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(estPair(2));


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for
function inverserChaine(chaine) {
  var resultat = '';

  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }

  return resultat;  
}



// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer




// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer




// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while
function premierDivisible() {
  var nombre = 1;

  while (nombre <= 50) {
    if (nombre % 3 === 0 && nombre % 5 === 0) {
      return nombre;
    }
    nombre++;
  }
}
