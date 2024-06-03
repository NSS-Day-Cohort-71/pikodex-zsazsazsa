import { playSound } from "./audio.js"
import { printData } from "./pikomon.js"


const container = document.querySelector('#container')

container.innerHTML = printData()


playSound()


