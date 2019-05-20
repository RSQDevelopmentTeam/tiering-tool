'use strict';
module.exports = function () {
  const list = document.querySelectorAll('form input');
  let form = {};
  let total = 0;
  let showTotalScore = document.getElementById('totalScore');
  let Range = document.getElementById('range');

  function addValues () {
    total = 0;
    for (let val in form) {
      if (form.hasOwnProperty(val)) {
        total += form[val];
      }
    }
    if (total !== 0) {
      showTotalScore.innerHTML = 'Score ' + total;
    } else {
      showTotalScore.innerHTML = 'Score ';
    }
    if (total === 0) {
      Range.innerHTML = 'Range ' + '';
    } else if (total > 0 && total <= 5) {
      Range.innerHTML = 'Range ' + 'Low';
    } else if (total >= 6 && total <= 9) {
      Range.innerHTML = 'Range ' + 'Medium';
    } else {
      Range.innerHTML = 'Range ' + 'High';
    }
  }

  function onClick (e) {
    if (e.target.checked) {
      form[e.target.name] = parseInt(e.target.value);
    } else {
      form[e.target.name] = 0;
    }
    addValues();
  }
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    form[list[i].name] = 0;
    list[i].addEventListener('click', onClick);
  }
};
