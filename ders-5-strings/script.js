// STRİNGS
// const firstName='Sadık';
// const lastName ='Turan';
// const age=35;
// let val;

// STRİNG CONCATETİON

// val=firstName +' '+lastName;
// val = 'Sadık'
// val +='Turan'

// val='Benim adım '+firstName+' '+ lastName+' ve yaşım ' + age + " izmit'te yaşıyorum."; 

// STRİNG CONCAT

// val = firstName.concat(' ',lastName);

// string uppercase - lowercase

// val= val.toUpperCase();
// val = val.toLocaleLowerCase();

// STRİNG LENGTH

// val = val.length;

// STRİNG REPLACE İÇİNDEKİ BİLGİYİ DEĞİŞTİRİR

// val = val.replace('Sadık','çınar');

// SPLİT DİZİ OLARAK SIRALAR
// let hobbies='spor,sinema,film,yazılım'

// val=hobbies.split(',');

// TRİM BAŞTAKİ VE SONDAKİ BOŞLUĞU ATAR

// TEMPLATE STRİNGS

// const fullName = 'Sena Turan';
// const city ='Kocaeli';
// const yearOfBirth=1999
// let val;

// ternary operator

// val = `my name is ${fullName} I'm ${
//     (2022-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;

// STRİNGS UYGULAMALARI

var sentence = 'Template Literals or template strings is the ability have multi-line strings without any funny business';

var url = "http://sadikturan.com/Modern java script Kursu sıfırdan ileri seviye";

// cümle kaç karakterlidir ?
console.log(sentence.length);

// kaç kelimeden oluşuyor?
console.log(sentence.trim().split(' '));

// tüm cümleyi küçük harfe çevirin
console.log(sentence.toLocaleLowerCase());

// cümlenin başındaki ve sonundaki boşukları siliniz.
console.log(sentence.trim());

// '-' karakterini silin.
console.log(sentence.replace('-',''));

// url içindeki str kısmını çıkarınız.
var str='http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol u kullanmaktadır (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com ifadesini içeriyormu ?
console.log(url.includes('.comm'));

// url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLocaleLowerCase()
                .replace(/ /g,'-')
                .replace(/ı/g,'i')
                .replace(/ü/g,'u')
                .replace(/ö/g,'o')
                );
