import './render.css'
import { A } from './b.js';

export function render() {
    console.log(A);
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}