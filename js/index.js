const bodi=document.querySelector('body');
const text = document.querySelector('p');
let conti= document.querySelectorAll('continer');
const tex= document.querySelectorAll('#tex');
let header= document.getElementsByClassName('header_continer');
let ullist= document.getElementsByClassName('olList');
// let button= document.querySelector('#batton')
let fcontiner= document.getElementsByClassName('fast_continer');
console.log(tex)

const buttonblac = document.querySelector('#batton-black');
const buttonwhil = document.querySelector('#batton-while');

buttonblac.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = 'red';
    tex.style.color = 'while';
})
buttonwhil.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = '#EBEBEB';
    tex.style.color = 'while';
})
// console.log(buttonblac)
