// Değişkenler

// Değişken Atamak
// var ile değişken atıyoruz

// var age
// console.log(age);


// var fullname="sadık";
// console.log(fullname);

// Değişken değiştirme=artık fullname berke oldu.
// fullname="berke";
// console.log(fullname)

// Değişken Tanımlama Kuralları

// Sayısal ifade başlayamaz

// var 1yas=yanlış
// var yas1=doğru

// Komut isimleriyle tanımlama yapılamaz.

// case sensitive büyük küçük duyarlılığı

// var firstName="sadık";

// var, let, const 

// bir bilginin değişmeyeceğini düşünüyorsan const ile değeri tanımlayabilirsin.

// ***********************

// DEĞİŞKEN TİPLERİ

// Pritive Types
    // String
    // let firstname="Çınar";
    // console.log(typeof firstname);
    // Number
    // let age=20;
    // console.log(typeof age);

    //Boolean genelde doğrumu yanlışmıda kullanıyor ürünün satışta ve satışta olmadığı durumu için genelde kullanılır
    // let isActive=true;
    // console.log(typeof isActive);

    // null
    // let job=null;

    // undefined
    // let car;


// Reference Types- Objects

    // Array

    // let names=['Ali', 'Ahmet', 'Can'];

    // Object

    // let adress= {
    //     city:'Kocaeli',
    //     country:'Türkiye'
    // }
    // console.log(typeof adress);

    // Function

    // var calcutaleAge= function(){
    //     return 0;
    // };
    // console.log(typeof calcutaleAge);
    // **************************

    // DEĞİŞKENLERDE TİP DÖNÜŞÜMÜ

    // number to String

    // let val;
    // val=String(10);
    // console.log(val)

    // bool to string

    // val=String(true);
    // console.log(val);

    // date to string
    // val = String(new Date());

    // Array to string
    // val=String([1,2,3,4]);

    // toString()
    // val=(10).toString();
    // val=(false).toString();

    // String to number
    // var = Number('10');
    // console.log(val)
    // console.log(typeof val);

    // JAVASCRİPT DEĞİŞKEN UYGULAMALARI

    // Bir müşterinizin aşağıdaki bilgileri için değişken oluşturunuz.

    // Müşteri adı
    // Müşteri soyadı
    // Müşteri tc kimlik
    // müşteri sipariş toplamı
    // müşteri cinsiyet
    // müşteri adres bilgisi
    // müşteri hobiler

    // var customerName='berke'
    // var customerSurname='akdemir'
    // var customerId='123456'
    // var total=205.6;
    // var gender=false; 
    // erkek true, kadın false
    // OBJECT
    // var adress={
    //    city:'pendik',
    //    country:'turkey',
    //    body:'ozlu sokak no:'
    // }
    // ARRAY
    // var hobies=['footbal', 'cinema', 'dance'];

    // Aşağıdaki siparişlerin toplamını hesaplayınız
    // Soru:
    // var order1='100';
    // var order2='150';

    // CEVAP:
    // var order1=Number('100');
    // var order2=Number('150');
    // var totalOrder=order1 + order2
    // console.log(totalOrder);

    // SORU 2:
    // Aşağıdaki siparişlerin toplamını hesaplayınız.

    // var order3='100.2';
    // var order4='150.5';

    // CEVAP:
    // var order3=Number('100.2');
    // var order4=Number('150.5');
    // var totalOrder2=order3+order4
    // console.log(totalOrder2)

    // ondalığı kaybetmek için parseInt yazıyorsun tam sayı olur

    // var order3=parseInt('100.2');
    // var order4=parseInt('150.5');
    // var totalOrder3=order3+order4
    // console.log(totalOrder3)

    // SORU 3 AŞAĞIDA VERİLEN DOĞUM YILINA GÖRE YAŞ HESAPLAYINIZ

    // CEVAP3:

    // var yearOfBirth =1986;
    // console.log(new Date().getFullYear()-yearOfBirth);

    // doğum yılının yeni değer atıyıp değişmemesi için var olan değişkeni const ile değiştiriyoruz
    // const yearOfBirth =1986;

    // SORU 4 AŞAĞIDAKİ STRİNG İFADENİN KARAKTER SAYISINI BULUNUZ?

    // CEVAP:4
    
    // var course='Modern Javascript Kursu';
    // console.log(course.length);
    




