try{
const quantityRangeInput = document.getElementById('quantity-range');
const quantityRangeValue = document.getElementById('quantity-value');
quantityRangeInput.parentElement.style.marginBottom = `${quantityRangeValue.offsetHeight+15}px`

quantityRangeInput.addEventListener('input', function() {
  const value = this.value;
  const min = this.min || 0;
  const max = this.max || 99;
  const percent = ((value - min) / (max - min)) * 99;
  
  quantityRangeValue.innerHTML = value;
  quantityRangeValue.style.left = `calc(${percent}% - ${Math.ceil(quantityRangeValue.offsetWidth/2)}px)`;
});


}catch{
  
}