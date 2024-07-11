const bodi=document.querySelector('body')
const text = document.getElementsByTagName('p');
let conti= document.querySelectorAll('continer')
let header= document.getElementsByClassName('header_continer')
let ullist= document.getElementsByClassName('olList')
// let button= document.querySelector('#batton')
let fcontiner= document.getElementsByClassName('fast_continer')
// console.log(button)

const buttonblac = document.querySelector('#batton-black');

buttonblac.addEventListener('click', function(event){
    event.preventDefault();
    bodi.style.backgroundColor = 'black';
})

// console.log(buttonblac)
