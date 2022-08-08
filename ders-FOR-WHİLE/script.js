// FOR / WHİLE DÖNGÜSÜ
/*

for(let i=0; i<10; i++){
    
    if(i==3){
        console.log('en sevdiğim rakam:'+i);
        // 3ü tekrar yazmak istemediğimiz için
        continue;
    }

    if(i==6){
        console.log('en sevmediğim rakam :6');
        // break for döngüsünü durdurur.
        break;
    }
}
*/

// WHİLE DÖNGÜSÜ

/*
let i=0;
while (i<10){
    console.log(i);
    i++;
}
*/

// DİZİLER VE OBJELERDE DE DÖNGÜ KULLANIMI

/*
let cars =['bmw','mercedes','toyota'];

for(let i=0; i<cars.length;i++){
    console.log(cars[i]);
}
*/

/*
let people=[
    {firstName:'ada', lastName:'bilgi'},
    {firstName:'yiğit', lastName:'bilgi'},
    {firstName:'çınar', lastName:'bilgi'}
];

for(let i=0; i<people.length;i++){
    console.log(people[i].firstName);
}
*/


// FOR İN

/*
for(let i in cars){
    console.log(`index: ${i} value: ${cars[i]}`);
}
*/

// FOR EACH

/*
cars.forEach(function(item){
    console.log(item);
});
*/

// MAP : RETURNS AN ARRAY
/*

let numbers= [1,5,6,8,10];

let num=numbers.map(function(n){
    return n*n; //yukarıdaki numaraların karesini hesapladı.
});
console.log(num);
*/
// SAYI BULMA OYUNU

var hak,can;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);
can=Number(prompt('kaç kerede bileceksiniz ?'));
hak=can;
console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi==tahmin){
        console.log(`tebrikler ${sayac} denemede bildiniz`);
        console.log(`puan: ${100-(100/can)*(sayac-1)}`);
        break;
    }else if(sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }
    if(hak==0){
        console.log('hakkınız bitti');
    }
}