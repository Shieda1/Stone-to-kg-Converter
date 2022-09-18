// https://www.omnicalculator.com/conversion/stone-to-kg

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgRadio = document.getElementById('kgRadio');
const stoneRadio = document.getElementById('stoneRadio');

let kg;
let stone = v; 

// labels of the inpust
const variable = document.getElementById('variable');

kgRadio.addEventListener('click', function() {
  variable.textContent = 'Stone';
  stone = v;
  result.textContent = '';
});

stoneRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;

  else if(stoneRadio.checked)
    result.textContent = `Stone = ${computestone().toFixed(5)}`;
})

// calculation

function computekg() {
  return Number(stone.value) * 6.35;
}

function computestone() {
  return Number(kg.value) / 6.35;
}