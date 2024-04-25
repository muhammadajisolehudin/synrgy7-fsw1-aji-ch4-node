function printData() {
    console.log("Data from printData function.");
}

function printDataCustom(message) {
    console.log(`Custom message from printDataCustom: ${message}`);
}

//kubus 
function volumeKubus(s) {
    return s * s * s;
}

function luasKubus(s) {
    return 6 * s * s;
}

//balok 
function volumeBalok(length, width, height) {
    return length * width * height;
}

function luasBalok(length, width, height) {
    return 2 * (length * width + length * height + width * height);
}

//prisma
function volumeprisma(base, triangleHeight, prismHeight) {
    return 0.5 * base * triangleHeight * prismHeight;
}

function luasPrisma(base, triangleHeight, prismHeight) {
    let baseArea = 0.5 * base * triangleHeight;
    let lateralArea = 3 * base * prismHeight; 
    return 2 * baseArea + lateralArea;
}




module.exports = { printData, printDataCustom, volumeKubus, luasKubus, volumeBalok, luasBalok, volumeprisma, luasPrisma };