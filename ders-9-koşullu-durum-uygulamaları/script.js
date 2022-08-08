/* Örnek 1 :
var trafigeCikis = new Date('8/1/2022');
trafigeCikis.setHours(0,0,0,0);
var trafiktekiMs= Date.now() - trafigeCikis.getTime();
var trafiktekiGun= Math.floor (trafiktekiMs/(1000*60*60*24));

if(trafiktekiGun<=365){
    console.log('1.servis bakım süreniz geldi');
}else if (trafiktekiGun>365 && trafiktekiGun<=365*2){
    console.log('2.servis bakım süreniz geldi');
}else if (trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log('3.servis bakım süreniz geldi');
}else{
    console.log('bilinmeyen süre');
}

console.log(trafiktekiGun);
*/

// var result = prompt("Who's there ?");
// if(result =='cancel'){
//     console.log('cancelled');
// }else if(result == 'admin'){
//     console.log('welcome admin');
// }else {
//     console.log('değeri girin');
// }


var ad= prompt('isminizi girin');
var sifre=prompt('şifreyi giriniz');
if(ad>'0' && sifre=='1234'){
    console.log(`${ad} hoşgedin`);
}else if(ad=='cancel' && sifre=='cancel'){
    console.log('cancelled');
}else{
    console.log('lütfen bilgileri eksiksiz giriniz');
}