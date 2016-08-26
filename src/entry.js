import 'aframe';

window.addEventListener("load", function(){
   let yellow = document.querySelector('#cube3');
   let tick = function(){
     let x = Math.ceil(Math.random() * 10);
     yellow.setAttribute('position', `-13 2 ${x}`);
     setTimeout(tick, 500);
   };
   tick();
});
// import {hello, world} from './world.js';
// alert(hello + world);
