const ejercicio1 = () => {
  const formElement = document.querySelector('#formulario')

  const required = (el, errorEl) => {
    const error = document.querySelector(errorEl);
    if (!el.value) {
      error.innerHTML = `El ${el.id} es requerido`;

      return true
    } else {
      error.innerHTML = ''

      return false
    }
  }

  const validation = (el, errorEl) => {
    const regex = /^[A-Za-z ]+$/
    const error = document.querySelector(errorEl);

    if (!regex.test(el.value)) {
      error.innerHTML = `Solo puede ingresar caracteres alfabéticos`;

      return true
    } else {
      error.innerHTML = ''

      return false
    }
  }

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#nombre');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    let nameResult = false;
    let mensajeResult = false;
    let asuntoResult = false;

    if (!name.value) {
      nameResult = required(name, '.errorNombre')
    } else {
      nameResult = validation(name, '.errorNombre')
    }

    if (!mensaje.value) {
      mensajeResult = required(mensaje, '.errorMensaje')
    } else {
      mensajeResult = validation(mensaje, '.errorMensaje')
    }

    if (!asunto.value) {
      asuntoResult = required(asunto, '.errorAsunto')
    } else {
      asuntoResult = validation(asunto, '.errorAsunto')
    }

    const resultElement = document.querySelector('.resultado')
    if (!nameResult && !asuntoResult && !mensajeResult) {
      resultElement.innerHTML = 'Mensaje enviado con éxito'
    } else {
      resultElement.innerHTML = ''
    }
  })
}

ejercicio1()