const fs=require('fs');

const people = [
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


// const filePath = './result.txt';

const saveData = (filePath) => {
    fs.writeFile(filePath, JSON.stringify(people), 'utf-8', (err) => {
        if(err) console.log("error save")
        else console.log("suksess save")
    })
}

const getData =(filePath)=>{
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        }
        console.log(JSON.parse(data))
    });
}

function getNamesFromFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            const people = JSON.parse(data).map(person => person.name); 
            console.log(people); 
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
        }
    });
}


function getDataById(filePath, id) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        const people = JSON.parse(data);
        const person = people.find(p => p.id === id); // Mencari orang dengan id yang cocok
        if (person) {
            console.log(person);
        } else {
            console.log("No person found with id:", id);
        }
        
    });
}

module.exports = { saveData, getData, getDataById, getNamesFromFile };