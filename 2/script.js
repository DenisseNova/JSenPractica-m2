const ejercicio2 = () => {
  const buttonElements = document.querySelectorAll('button')
  buttonElements.forEach((el) => {
    el.addEventListener('click', () => {
      const caja = document.querySelector('#caja')
      caja.style.backgroundColor = el.style.backgroundColor
    })
  })
}

ejercicio2()