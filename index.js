// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// ECHAGHAFI ASMA

function solutionExercice1(N) {
  for (let i = N; i >= 1; i--) {
    let isSorted = true;
    let num = i.toString().split('');
    for (let j = 0; j < num.length - 1; j++) {
      if (num[j] > num[j + 1]) {
        isSorted = false;
        break;
      }
    }
    if (isSorted) {
      return i;
    }
  }
}

function solutionExercice2(L) {
  L.sort((a, b) => a - b);
  for (let i = 0; i < L.length; i++) {
    if (L[i] > 0 && L[i] !== L[i + 1]) {
      if (L[i] !== 1) {
        return 1;
      }
      if (L[i + 1] - L[i] > 1) {
        return L[i] + 1;
      }
    }
  }
  return L.length ? L[L.length - 1] + 1 : 1;
}
function solutionExercice3(L) {
  var unique;
  for (var i = 0; i < L.length; i++) {
    unique ^= L[i];
  }
  return unique;
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
