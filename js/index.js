const bodi=document.querySelector('body');
const text = document.querySelector('p');
let conti= document.querySelectorAll('continer');
const tex= document.querySelectorAll('#tex');
let header= document.getElementsByClassName('header_continer');
let ullist= document.getElementsByClassName('olList');
// let button= document.querySelector('#batton')
let fcontiner= document.getElementsByClassName('fast_continer');
// console.log(bodi)

const buttonblac = document.querySelector('#batton-black');
const buttonwhil = document.querySelector('#batton-while');
const buttongreen = document.querySelector('#batton-green');

buttonblac.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = 'red';
    // tex.style.color = 'while';
    bodi.style.color = '#EBEBEB';
})
buttonwhil.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = '#EBEBEB';
    tex.style.color = 'while';
})
buttongreen.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = 'rgb(4,175,47)';
    tex.style.color = 'while';
})
// console.log(buttonblac)


