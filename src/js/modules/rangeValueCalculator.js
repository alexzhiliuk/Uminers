try{
const quantityRangeInput = document.getElementById('quantity-range');
const powerRangeInput = document.getElementById('power-range');
const quantityRangeValue = document.getElementById('quantity-value');
const powerRangeValue = document.getElementById('power-value');
quantityRangeInput.parentElement.style.marginBottom = `${quantityRangeValue.offsetHeight+15}px`
powerRangeInput.parentElement.style.marginBottom = `${powerRangeValue.offsetHeight+15}px`

quantityRangeInput.addEventListener('input', function() {
  const value = this.value;
  const min = this.min || 0;
  const max = this.max || 99;
  const percent = ((value - min) / (max - min)) * 99;
  
  quantityRangeValue.innerHTML = value;
  quantityRangeValue.style.left = `calc(${percent}% - ${Math.ceil(quantityRangeValue.offsetWidth/2)}px)`;
});

powerRangeInput.addEventListener('input', function() {
  const value = this.value;
  const min = this.min || 0;
  const max = this.max || 99;
  const percent = ((value - min) / (max - min)) * 99;
  
  powerRangeValue.innerHTML = value;
  powerRangeValue.style.left = `calc(${percent}% - ${powerRangeValue.offsetWidth/2}px)`;
  if (window.innerWidth < 480) {
    document.querySelector('button[type="submit"]').textContent = "Подробный расчет"
}
});
}catch{

}