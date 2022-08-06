// ARRAYS
// let names =['çınar','sena','ada','yiğit'];
// let years=[1970,1999,2012,2010];
// let mix=['sadık','turan',1983,null,undefined,['sinema','kitap']];

// get array item 3.cü ismi gösterir
// console.log(names[3])

// set array item array içindeki ismi değiştirir
// names[0]='emel';
// names[names.length]='emel'; direk en sona emel diye ekler

// add item

// years.push(1986); en sona ekler
// years.unshift(1986); en başa ekler

// remove item

// years.pop(); en sondaki elemaı siler
// years.ship(); en baştaki elamanı siler

// indexof dizinin içinde kaçıncı sırada olduğunu gösterir

// let index = names.indexOf('ada');

// reverse
// names.reverse();

// sort

// years.sort(); küçükten büyüğe sıralar

// concat
// let val =years.concat(names);

// splice birinci elemanı siler ve eleman ekler
// names.splice(0,1);

// find
// let val =years.find(over18);

// filter birden fazla elamanı yazdırabiliriz
// function over18(year){
//     let age = 2018-year;
//     return age>=18;
// }

// let val =years.filter(over18);
// console.log(val);

// ARRAY UYGULAMALARI

// bmw,mercedes,opel,mazda elemanlarına sahip bir dizi oluşturun.

let arr= ['bmw','mercedes','opel','mazda'];

// dizi kaç elemanlı
console.log(arr.length);
// dizinin ilk ve son elemanı nedir ?
console.log(arr[0]);
console.log(arr[3]);

// renault, fiat değerini dizinin sonuna ekleyin
arr[4]='renault';
arr[arr.length]='fiat';

// dizinin sonuna toyota ekleyin
arr.push('toyota');
// dizinin başına seat ekleyin
arr.unshift('seat');
// seat değerini siliniz dizinin en başını shift ile sileriz
arr.shift('seat');
// toyota değerini siliniz dizinin son değerini siler
arr.pop('toyota');
// dizi elemanlarını ters çevirin
arr.reverse();
// dizi elemanlarını alfabetik sıraya göre sıralayın
arr.sort();
// [1,2,5,80] dizisini sıralayın.

// Opel değeri dizinin bir elemanımıdır ?
console.log(arr.indexOf('opel'));
console.log(arr.includes('opel'));
// var str = chevrolet,dacia ifadesini diziye çeviriniz.
var str ='chevrolet, dacia';
var arr2= str.split(',');
console.log(arr2)

// oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var arr3=arr.concat(arr2);
console.log(arr3);
// oluşturulan diziden son 2 elemanı siliniz. dizi 8 elemanlı son 2 6 dan başlayıp 2 karakter sil kodu:
console.log(arr3.splice(6,2));

// aşağıda verilen elemanları bir dizi içerisinde saklayınız.
// aşağıdaki verilen elemanları biz dizi içerisinde saklayınız

var studentA=['Yiğit','bilgi',2010];
var studentB=['sena','turan',1999];
var studentC=['ahmet','turan',1998];

var students=[studentA,studentB,studentC];
console.log(students);