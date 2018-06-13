let grayArea = document.getElementById('close-popup')
let popup = document.getElementById('popup')
let cruz = document.getElementById('cruz')
let API_KEY = '736d57fe43d9b82fda796c59f12933858138d3db'
grayArea.addEventListener('click', () => {
  closePopup()
})
cruz.addEventListener('click', () => {
  closePopup()
})

closePopup = () => {
  popup.style.opacity = 0
  grayArea.style.opacity = 0
  setTimeout(() => {
    popup.style.display = 'none'
    grayArea.style.display = 'none'
  }, 300)
}

// Escuelas conectadas
axios
  .get(
    `https://modernizacion.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20modernizacion.data_1`
  )
  .then(function(response) {
    // console.log('Escuelas conectadas: ', response.data.total_rows)
    if (response.data.total_rows != 0) {
      document.getElementById('footer-number-conectadas').innerHTML =
        response.data.total_rows
    }
  })
  .catch(function(error) {
    console.log(error)
  })
// Escuelas próxima conexión
axios
  .get(
    `https://modernizacion.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20modernizacion.data_4`
  )
  .then(function(response) {
    // console.log('Escuelas por conectar: ', response.data.total_rows)
    if (response.data.total_rows != 0) {
      document.getElementById('footer-number').innerHTML =
        response.data.total_rows
    } else {
      document.getElementById(
        'footer-number'
      ).innerHTML = `<img class="logo-escuela" src="./img/Escuela no conectada-01.svg" alt="">`
    }
  })
  .catch(function(error) {
    console.log(error)
  })

parent.document.querySelector('.mapa p').innerHTML =
  'Desarrollado por <a href="https://datosgobar.github.io/escuelas-rurales-conectadas/" target="_blank">Ministerio de Modernización</a>'
