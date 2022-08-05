// NUMBERS

// let val;
// val=Number('10');
// val=parseInt('10');
// val=parseFloat('10.5');
// val=isNaN('10');
// val=isNaN('a10');


// var num=10.1245678
// val=num.toPrecision(2); toplamda 2 basamaklı sayı getirir
// val=num.toFixed(2) virgülden sonra 2 basamak getirir.

// val = Math.PI;
// val = Math.round(2.4); 2 ye yuvarlar
//  val = Math.round(2.7); 3 e yuvarlar
// val = Math.ceil(2.3) 3 e yuvarlar her zaman yukarı yuvarlar
// val = Math.floor(2.8) 2 ye yuvarlar her zaman aşağıya yuvarlar.
// MATEMATİK İŞLEMLERİ

// val = Math.sqrt(64) 64 ün karekökü 8 i bulur
// val = Math.pow(2,3); 2 üzeri 3 ü hesaplar
// val = Math.abs(-100); pozitif değer çıkar 100
// val = Math.min(1,2,3,4,5,6,9); en küçük sayıyı verir 1
// val = Math.max(4,5,6,7,8,9); en büyük değeri verir 
// val = Math.random(); her defasında random bi sayı verir
// val = Math.floor(Math.random()*100+1); 0 hariç 100 e kadar rasgele bir sayı verir ve floor koyduğumuz için küsüratı almaz.

// NUMBERS UYGULAMALARI

// Toplamda 3 basamaklı sayı kullan
let val;
let num=100.345678;
// cevap
// val=num.toPrecision(3);

// Ondalık kısmı 3 basamakta sınırla

// cevap:
// val=num.toFixed(3);

// en yakın sayıya yuvarla

// cevap
// val=Math.round(2.4);

// aşağıya yuvarla

// cevap:
// val=Math.floor(2.9);

// yukarıya yuvarla

// cevap:
// val=Math.ceil(2.1);

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

// cevap:
// val=Math.min(1,2,10,56,20);
// val=Math.max(1,2,10,56,20);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.

// cevap
// var min =50;
// var max =100;

// console.log(Math.floor(min+Math.random()*(max-min)));

/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım.

Brüt maaş : 3700tl
brüt mesai : 10.3tl

Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir? */

// cevap:

/* var brutMaas = 3700;
var mesaiUcreti= 10.3;
var mesaiSuresi=42;
var toplamBrutMaas=brutMaas +(mesaiUcreti*mesaiSuresi);
console.log(toplamBrutMaas);

var toplamNetMaas= toplamBrutMaas-toplamBrutMaas*0.25

console.log(toplamBrutMaas,toplamNetMaas.toFixed());
*/


