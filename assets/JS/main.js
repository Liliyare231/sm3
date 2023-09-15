
let button1 = document.querySelector('.button_1');
let button2 = document.querySelector('.button_2');
let button3 = document.querySelector('.button_3');
let button4 = document.querySelector('.button_4');
let button5 = document.querySelector('.button_5');
let button6 = document.querySelector('.button_6');
let button7 = document.querySelector('.button_7');
let for_box = document.querySelector('.for_box');
let for_box2 = document.querySelector('.for_box2');
let for_box3 = document.querySelector('.for_box3');

button1.addEventListener('dblclick', ()=> {
    button1.style.bacground = 'none'
    button1.style.color = 'cadetblue'
    button1.style.border = '1px solid cadetblue' 
    button1.style.padding = '20px 30px'
    button1.style.borderRadius = '20px'
 })

 button2.addEventListener('contextmenu', ()=> {
    alert('Представьте, что это контекстное меню с крутым дизайнерским решением')
 })
 function getRandom(max){
   return Math.floor(Math.random()*max);
 }

 button3.addEventListener('mousemove', ()=> {
   console.log(getRandom(100));
   document.body.style.background = `rgb(${getRandom(300)},${getRandom(300)},${getRandom(300)})`
 })

 button4.addEventListener('mouseout', ()=> {
    document.body.style.backgroundColor = 'white'
 })
 button5.addEventListener('mousedown', ()=> {
    let box = ' <div class="box">Новости: в столовой МЦК КТИТС появилось новое блюдо - Синнабон</div>'
    for_box.insertAdjacentHTML('beforeend',box);
 })
 
 button6.addEventListener('mouseup', ()=> {
    let box = ' <div class="box">F12 -> console</div>'
    for_box2.insertAdjacentHTML('beforeend',box);
    console.log('- Блин! - сказал слон, наступив на колобка.');
 })

 button7.addEventListener('click', ()=> {
    let box = '  <img src="assets/img/ea8d8665e3ba6bc5a1de4063a37c5e8b.jpg" alt="">'
    for_box3.insertAdjacentHTML('beforeend',box);
 })