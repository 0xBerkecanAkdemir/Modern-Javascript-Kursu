// DATE OBJECT

// let d = new Date();
// let birthday = new Date(1990,1,5);

// SET METHODS 2022- OLAN YILI ALTTAKİ KOMUTLA 2020 OLARAK DÜZENLEDİK.
// d.setFullYear(2020);
// d.setMonth(5);
// d.setHours(16)

// GET METHODS
// console.log(d);
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(typeof d);

// bugünün yılından kişinin doğum yılını çıkarma komutu
// console.log(d.getFullYear()-birthday.getFullYear());

// DATE & TİMES UYGULAMALARI

let d = new Date();

// Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

console.log(d);

// Tarih ve saat bilgisini içeren bir date objesi oluşturunuz.

var dtA = new Date('8/5/2022 12:00:25');
console.log(dtA);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);

// İki tarih arasındaki geçen zamanı bulunuz.
var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

var milisecond = end-start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun  = saat / 24;
var yil = gun / 365;

console.log('milisecond:'+milisecond);
console.log('saniye'+saniye);
console.log('dakika'+dakika);
console.log('saat'+saat);
console.log('gun'+gun);
console.log('yil'+yil);

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zamana kutlanacaktır?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);
while(annelerGunu.getDay() !=0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);


// Yaş hesaplama nasıl yapılır?
var ds= new Date();
var birthday = new Date('1/1/1996');
console.log(ds.getFullYear()-birthday.getFullYear());