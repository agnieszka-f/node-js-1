const fs = require('fs');

const gender = ['K', 'M'];
const firstNamesWomens = ['Alicja','Karolina','Sylwia','Weronika','Ewa','Natalia','Jadwiga','Felicja'];
const firstNamesMans  = ['Edward','Adam','Marek','Stefan','Antoni','Waldemar','Kajetan','Hubert'];
const lastNames = ['Lew','Kowalczyk','Kaczmarek','Krupa','Lis','Wilk','Kot','Kruk'];

let people = [];

let file = 'person.txt';

for(let i = 0; i < 20; i++){
  let randGender = gender[Math.floor(Math.random() * 2)];
  people.push({
    gender: randGender,
    firstName: randGender == 'K' ? firstNamesWomens[Math.floor(Math.random() * 7)] : firstNamesMans[Math.floor(Math.random() * 7)],
    lastName: lastNames[Math.floor(Math.random() * 7)],
  });
}
const data = JSON.stringify(people);

fs.writeFile(file, data, error =>  error ? console.log('Błąd podczas zapisu do pliku: ' + error) : '' );

