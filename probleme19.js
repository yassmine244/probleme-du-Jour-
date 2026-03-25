// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 *
 */
//1 Creer une variable vide
//2 Parcourir string1 (boucle "for")
//3 Prendre chaque caractère
//4 verfier si y a pas des espaces ,existe dans string2 
//5 si oui ajouter au resultat
//6 si vide retourne null sinon retourne resultat
var commonCharacters = function(string1, string2) {
  let result = '';

  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];

    if (
      char !== ' ' &&
      string2.includes(char) &&
      !result.includes(char)
    ) {
      result += char;
    }
  }

  if (result === '') {
    return null;
  }

  return result;
};
 
