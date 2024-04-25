const { printData, volumeKubus, luasKubus, volumeBalok, luasBalok, volumeprisma, luasPrisma, saveAndResetData } =require('./dummy');

const people = { saveData, getData, getDataById } = require('./people');
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
const fs=require('fs');


saveData();
getData();
getDataById('./people.txt', 1);



