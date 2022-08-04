// OPARATÖRLER
// let val;
// const a=10;
// const b=5;
// const c=5;
// let d=3;
// 1- Aritmetik Oparatörler

// val=a+b;
// val=a-b;
// val=a*b;
// val=a/b;
// val=a%b;
// val=d++;
// val=++d;
// val=--d;
// val=d--;

// 2-Atama Oparatörleri

// val=a;
// val +=a; //val =val + a;
// val -=a; //val =val - a;
// val *=a; //val =val * a;
// val /=a; //val =val / a;
// val %=a; //val =val % a;

// 3-Karşılaştırma Oparatörleri

// val= a==b;
// val= b==c;
// val= a===b; // 2 ile 3 eşittir arasındaki fark 3 eşittir hem değer hemde tip kontrolü yapıyor 5 === '5' false verir 5 === 5 olsa true verir. 
// val=a!=b; //a b ye eşit değil mi?
// val=a!==b;//a b ye eşit değil mi?
// val=a > b;
// val=b < a;
// val=a >=b;
// val=5 >=5;
// val=a <=b; 

// 4- MANTIKSAL OPARATÖRLER

//&& (And ve anlamına gelir)
// && de 1 false olsa cevap false olur

//Soru a, b ve c den büyükmü bir tanesi false olursa cevap false olur ?
// val= (a>b) && (a>c); 

// || (OR - VEYA)

// true - true => true
// true - true => true
// false - false=> false

// val=(a>b) || (a>c);

// ! (NOT- OLUMSUZLUK)

// val= !(a>b) //false gelir

//**************************

//JAVASCRİPT OPARATÖR UYGULAMALARI

// 1 - Can ve Ada ' nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//**Formül: Kişinin kilosu / boy uzunluğunun karesi */
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9 : normal
// 25,0 - 29,9 : fazla kilolu
// 30,0 - 34,9 ; şişmaz(obez)

const kgCan= 90;
const boyCan=1.80;
const kgAda= 40;
const boyAda= 1.60;
IndexCan =(kgCan) / (boyCan*boyCan);
IndexAda = (kgAda) / (boyAda*boyAda);
//.toFixed küsüratı yuvarlamak için 17.777 değilde direk 18 yazdırmak için kullanılır
console.log(IndexAda.toFixed(),IndexCan.toFixed());

let adaHigherIndex= IndexAda>IndexCan;
let canHigherIndex= IndexCan>IndexAda;
console.log("adanın indeksi candan daha büyüktürk ?"+adaHigherIndex);
console.log('canın indenksi adadan daha büyüktür?'+canHigherIndex)

let AdaZayif=(IndexAda>=0)&&(IndexAda<=18.4);
let AdaNormal=(IndexAda>=18.5)&&(IndexAda<=25.9);
let AdaFazlaKilolu=(IndexAda>=25.0)&&(IndexAda<=29.9);
let AdaSisman=(IndexAda>=30)&&(IndexAda<=34.9);
console.log("Ada zayıf"+AdaZayif);
console.log("Ada normal"+AdaNormal);
console.log("ada kilolu"+AdaFazlaKilolu);
console.log("ada sisman"+AdaSisman);




