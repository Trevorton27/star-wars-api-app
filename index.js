const table = document.getElementById("main-table");

window.addEventListener('load', async () => {

    let characterData = {};

    const getPeople = await fetch('https://swapi.dev/api/people/')
        .then((response) => response.json());
 

    const getPlanets = await fetch('https://swapi.dev/api/planets/')
        .then((response) => response.json());


    const getSpecies = await fetch('https://swapi.dev/api/species/')
        .then((response) => response.json());


    const people = getPeople.results;
    const planets = getPlanets.results;
    const species = getSpecies.results;
console.log(people);

    let characters = people.forEach((character) => {
    // console.log('character name is ', character.name);
    characterData = {
    name: character.name,
    birthyear: character.birth_year,
    height: character.height,
    mass: character.mass,
   }
    console.log(characterData);
    return  characterData;
})
    
    const planet =  planets.forEach((homeworld) => {
        // console.log('characters homeworld is ', homeworld.name);
        homeWorld = homeworld.name;
        return homeWorld;
    })

    const type = species.forEach((speciesType) => {
    //     // console.log('species is ', speciesType.name);
        classification = speciesType.name;
        return classification;
 })

 const data = [characters, planet, type];

 data.forEach(() => {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    const tableCell1 = document.createElement('td');
    tableRow.appendChild(tableCell1);
    const tableCell2 = document.createElement('td');
    tableRow.appendChild(tableCell2);
    const tableCell3 = document.createElement('td');
    tableRow.appendChild(tableCell3);
    const tableCell4 = document.createElement('td');
    tableRow.appendChild(tableCell4);
    const tableCell5 = document.createElement('td');
    tableRow.appendChild(tableCell5);
    const tableCell6 = document.createElement('td');
    tableRow.appendChild(tableCell6);

    tableCell1.textContent = characterData.name;
    tableCell2.textContent = characterData.birthyear;
    tableCell3.textContent = characterData.height;
    tableCell4.textContent = characterData.mass;
    tableCell5.textContent = homeWorld;
    tableCell6.textContent = classification;
 })
    
   

});












        // fetch('https://swapi.dev/api/planets/'),
        // fetch('https://swapi.dev/api/people/'),
        // fetch('https://swapi.dev/api/species/')

    //  fetch('https://swapi.dev/api/people/')
    //  .then((response) => response.json())
    //  .then((values) => {
    //      const characters = values.results;
    //      console.log('characters are ', characters );

    //      characters.map((person) => {
    //      const homeWorld = fetch(person.homeworld)
    //        .then((response) => response.json())
    //        .then((homeWorld) => {
    //             // console.log('homeworld value is ', homeWorld)
    //             const homeWorldName = homeWorld.name;
    //            console.log( person.name + "is from " + homeWorldName);
    //        })
    //      })
    //   })
    //   .catch (error => console.log('you got yerself an error ', error))


