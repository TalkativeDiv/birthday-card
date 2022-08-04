import './assets/css/style.css'
import './assets/css/style.css'
import Alpine from 'alpinejs'
import loadImg from './components/canvas'
window.Alpine = Alpine
loadImg()
Alpine.start()

document.getElementById('play-button')?.addEventListener('click', () => {
  window.speechSynthesis.speak(
    new SpeechSynthesisUtterance(
      'Happy ' +
        document.getElementById('ageSpn')?.innerText +
        'th ' +
        'Birthday to you, ' +
        document.getElementById('nameSpn')?.innerText +
        '!'
    )
  )
})
