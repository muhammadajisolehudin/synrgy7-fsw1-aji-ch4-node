const { printData, volumeKubus, luasKubus, volumeBalok, luasBalok, volumeprisma, luasPrisma } =require('./dummy');

printData();

// custom modul, luas dan volume 
// kubus
let sisiK = 5;  //  sisi kubus 

let vKubus = volumeKubus(sisiK);
let lKubus = luasKubus(sisiK);


// balok
let panjangB = 10; 
let lebarB= 5;    
let tinggiB = 3;   

let vBalok = volumeBalok(panjangB, lebarB, tinggiB);
let lBalok = luasBalok(panjangB, lebarB, tinggiB);

// prisma segitiga 
let alas = 6; 
let tinggiS = 4; // Tinggi segitiga 4
let tinggiP = 10; // Tinggi prisma 10

let vPrisma = volumeprisma(alas, tinggiS, tinggiP);
let lPrisma = luasPrisma(alas, tinggiS, tinggiP);

// console.log("luas balok :", lBalok, "kubus :", lKubus, "prisma :", lPrisma);
// console.log("volumw balok :", vBalok, "kubus :", vKubus, "prisma :", vPrisma);

const os=require('os')
const fs=require('fs')

// const data = fs.readFileSync('./result.txt', 'utf-8')
// console.log(data);

const person = [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
{
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
{
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
]


fs.writeFile('./result.txt', JSON.stringify(person, null, 2), 'utf-8', (err) => {
  if (err) {
    console.log('Error saving data:', err);
    return; 
  }

  fs.readFile('./result.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading data:', err);
      return; 
    }
    const parsedData = JSON.parse(data);
    parsedData.forEach((person) => {
      console.log(person.name); 
    });
  });
});

