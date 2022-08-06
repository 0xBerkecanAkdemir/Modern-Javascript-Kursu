// İF / ELSE

const firstName='Sena';
const age = 19;
const isStudent=true;
const school='university';

// if(firstName =='Sena'){
//     console.log('Merhaba Sena');
// }
// if(age===19 ){
//     console.log('yaşınız 19');
// }

// if (age>=18){
//     console.log('ehliyet alabilirsin');
//     if((school=='university') || (school=='high school')){                      //veya
//     console.log('ehliyet alabilirsin');    
//     }else{
//         console.log('eğitim durumunuz yetersiz');
//     }
// }else{
//     console.log('ehliyet alamassın');
// }

if (age>0 && age<=12){
    console.log(`${firstName}is a child`);
}else if(age>=13 && age <=19){
    console.log(`${firstName} is a teanager`);
}else{
    console.log(`${firstName}is an adult`)
}