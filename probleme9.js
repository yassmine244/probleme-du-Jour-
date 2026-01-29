// 1- Crée une fonction qui prend un tableau et retourne le nombre d’éléments pairs avec une boucle while.
function pair(t) {
  var i = 0;
  var n = 0;

  while (i < t.length) {
    if (t[i] % 2 === 0) {
      n++;
    }
    i++;
  }

  return n;
}

// 2- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments en ordre inverse avec une boucle for.
function inverser(t) {
  var n = [];

  for (var i = t.length - 1; i >= 0; i--) {
    n.push(t[i]);
  }

  return n;
}



// 3- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant seulement les nombres impairs avec une boucle while.
function impairs(t) {
  var n = [];
  var i = 0;

  while (i < t.length) {
    if (t[i] % 2 !== 0) {
      n.push(t[i]);
    }
    i++;
  }

  return n;
}



// 4- Crée une fonction qui prend un tableau et retourne le nombre d’éléments positifs avec une boucle while.
function positif(t) {
  var i = 0;
  var n = 0;

  while (i < t.length) {
    if (t[i] > 0) {
      n++;
    }
    i++;
  }

  return n;
}



// 5- Crée une fonction qui prend un tableau et retourne un nouveau tableau contenant les éléments à l’index pair avec une boucle for.
function indexpair(t) {
   var  n = [];

  for (var i = 0; i < t.length; i++) {
    if (i % 2 == 0) {
      n.push(t[i]);
    }
  }

  return n;
}


