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
]


// const filePath = './result.txt';

const saveData = (filePath) => {
    fs.writeFile(filePath, JSON.stringify(people), 'utf-8', (err) => {
        if(err) console.log("error save")
        else console.log("suksess save")
    })
}

const getData = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
        }
    });
}

// const getData =(filePath)=>{
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.error("Error reading file:", err);
//         }
//         console.log(JSON.parse(data))
//     });
// }

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



function createData(filePath, newData) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        // let people = [];
        people.push(newData);
        fs.writeFile(filePath, JSON.stringify(people), 'utf-8', writeErr => {
            if (writeErr) {
                console.error("Error saving file:", writeErr);
            } else {
                console.log("Data successfully saved.");
                console.log("Updated data:", people);
            }
        });
    });
}

module.exports = { saveData, getData, getDataById, getNamesFromFile, createData };