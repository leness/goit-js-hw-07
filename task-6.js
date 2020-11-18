let valueEl = document.getElementById("validation-input")

valueEl.onblur = function() {
  console.log(this.value.length);
  if (this.getAttribute('data-length') > this.value.length) { 
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else if (this.getAttribute('data-length') < this.value.length) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};