// let val;
// val=document.head;
// console.log(val);

// TEKİL ELEMENT SEÇİMİ
// document.getElementById('') kullanılır.
/*
let val;

val =document.getElementById('header');
val.style.fontSize='45px';
val.style.color='red';
val.style.fontWeight='bold';

val =document.getElementById('header').innerText='berko baba';

val =document.getElementById('header').innerHTML='<b>berko baba</b>';
*/




// İD İÇİN # işareti olmalı CLAS İÇİN .

// console.log(document.querySelector('#header'));
// console.log(document.querySelector('#bb'));S

// MULTİPLE SEÇİM

// let val;
// val = document.getElementsByClassName('list-group-item')
// getElementsByClassName('list-group-item')[0];
// // yada val = val[0];

// val[0].style.color='blue';
// val[0].style.fontSize='25px';

// // toplu renk değiştirme
// for (let i=0; i<val.length; i++){
//     console.log(val[i].style.color='red');
// }



// document.getElementsByTagName()
// let =val;
// val=document.getElementsByTagName('li');
// val=document.getElementById('task-list');
// val=document.getElementsByTagName('a');


// document.querySelectorAll()
// önce yere ulaşıp sonra item ile değiştir
// let = val;
// val=document.querySelectorAll('li:nth-child(odd)');

// val.forEach(function(item){
//     item.style.background='#fff';
// })
// console.log(val);

// TRAVERSİNG THE DOM ( DOM ÜZERİNDE GEZİNME)

// let val;
// let list = document.querySelector('.list-group');

// val = list;

// val = list.childNodes;
// val=list.childNodes[0];


// val = list.children;
// val = list.children[0];
// val = list.children[2].textContent='new item';

// for(let i=0; i<list.children.length; i++){
//     console.log(list.children[i]);
// }


// DOM ELEMENTLERİNİ OLUŞTURMA

// CREATE ELEMENT
/*
const li = document.createElement('li');

// ADD CLASS
li.classname='yeni class'
// ADD ATTİRİBUTE
li.setAttribute('title','yeni başlık');
// TEXT- NODE
const text = document.createTextNode('yeni yazı');
li.appendChild(text);
// ADD A ETİKETİ
const a = document.createElement('a');
a.setAttribute('href','#');
a.className('classA');
a.innerHTML='<i class="fas fas time"></i>';
// APPEND A TO Lİ
li.appendChild(a);
// APPEND Lİ TO UL
document.querySelector('#task-list').appendChild(li);
console.log(li);
*/
/*
// DOM ELEMENT SİLME

const taskList = document.querySelector('#task-list');

// remove element tümünü siler
taskList.remove();
// 1.ci indexi siler
taskList.children[1].remove();
// removing attribute 0.elemanın class elamanını siler
taskList.children[0].removeAttribute('class');
// bütün elemanların clasını silme
for(let i=0; i<taskList.children.length; i++){
    taskList.children[i].removeAttribute('class');
}
*/


/*
// replacing elements eleman değiştirme
const cardHeader = document.querySelector('.card-header');

// create element
const h2 = document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('my list'));

const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader);


console.log(cardHeader);
*/

// class değiştirme

let val;
link =taskList[0].children[0];
val = link.className;
val = link.classList;
// yeni class ekleme
link.classList.add('new class');
// class silme
link.classList.remove('new class');
// attributes alma
val = link.getAttribute('class');
// attributes değiştirme
val = link.setAttribute('href','yenilink');
console.log(val);