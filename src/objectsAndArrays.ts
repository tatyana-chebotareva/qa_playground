console.log(`\n*** Object:`);
var presidentOfEcuador = {
    firstName: "Guillermo",
    lastName: "Lasso",
    age: 64
};
presidentOfEcuador.age = 65;
console.log(
    `Person:\nName: "${presidentOfEcuador.firstName} ${presidentOfEcuador.lastName}" \nAge: ${presidentOfEcuador.age}`
);

console.log(`\n*** Array:`);
var nationalParks: Array<string> = ["Acadia", "Yosemite", "Joshua Tree", "Yellowstone", "Grand Teton", "Zion"];
nationalParks.push("Great Smoky Mountains");
nationalParks.forEach((parkName, index) => {
    // a forEach can give back just each item in the array,
    // each item and the index,
    // or each item, the index, and the whole list
    console.log(`${index + 1}. ${parkName}`);
});

console.log(`\n*** Array of objects:`);
var pets = [
    {
        petName: "Snowflake",
        petType: "Parrot",
    },

    {
        petName: "Anjo",
        petType: "Dog",
    },

    {
        petName: "Glowy",
        petType: "Snake",
    }    
]
pets.forEach((pet) => {
    console.log(`This is a ${pet.petType} called ${pet.petName}`);
})

console.log(`\n*** Object having an array:`);
var myObject = {
    firstParameter: "myObject",
    secondParameter: [true, false, false],
}
console.log(`${myObject.firstParameter} has an array of booleans: ${myObject.secondParameter}`)