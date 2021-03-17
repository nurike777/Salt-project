let marker = true

const statsAnimation = () => {
  const number1 = document.getElementById('number1')
  const number2 = document.getElementById('number2')
  const number3 = document.getElementById('number3')
  const number4 = document.getElementById('number4')
  const number5 = document.getElementById('number5')

  let num = 0
  let num1 = 0
  setInterval(() => {
    num++
    num1 += 0.1
    if(num <= 126) {
      number1.textContent = num
    }
    if(num <= 300) {
      number2.textContent = num
    }
    if(num1 <= 20.2) {
      number3.textContent = num1.toFixed(1)
    }
    if(num <= 45) {
      number4.textContent = num
    }
    if(num <= 511) {
      number5.textContent = num
    }
  }, 1);

  marker = false
}

window.addEventListener('scroll', () => {
  const stats = document.getElementById('stats')

  let scrollTop = pageYOffset + document.documentElement.clientHeight
  if(scrollTop > stats.offsetTop) {
    if(marker) {
      statsAnimation()
    }
  }
})
