const table = document.getElementById("main-table");

window.addEventListener('load', async () => {

    const getPeople = await fetch('https://swapi.dev/api/people/')
        .then((response) => response.json());

    const people = getPeople.results;

    people.forEach((character) => {
  
        const characterData = character;
        console.log(characterData);
        const getHomeWorld = async () => {
            const response = await fetch('https://swapi.dev/api/planets/')
                .then((response) => {
                   return response.json();
                });
                // console.log('getHomeWorld response = ', response.results);
            return response.results;
        };
        const getSpecies = async () => {
            const response = await fetch('https://swapi.dev/api/species/')
                .then((response) => {
                    return response.json();
                });
                 // console.log('getSpecies response = ', response.results);
                return response.results;
        }
        const getCharacterData = async (character) => {
            const worldData = await getHomeWorld(character.homeworld);
            const speciesData = await getSpecies(character.species);

            const world = worldData.forEach((world) => {
                console.log('homeworld name = ', world.name);
                return world.name;
            });

            const species = speciesData.forEach((species) => {
                console.log('species name = ', species.name);
                return species.name;
            })

                const tableData = {
                        name: character.name,
                        height: character.height,
                        mass: character.mass,
                        homeworld: world,
                        species: species,
                        birthDate: character.birth_year
                    };

                    return tableData;
        };
        getCharacterData(character).then((data) => {
            console.log(data);

        })
        
        
       
    })
    
});









    //    

    // const getSpecies = async () => {
    //     await fetch('https://swapi.dev/api/species/')
    //     .then((response) => response.json());
    // }

    // const species = getSpecies.results;

    // planets.forEach((homeworld) => {
    //     // console.log('characters homeworld is ', homeworld.name);
    //     const homeWorld = homeworld.name;
    //     return homeWorld;
    // })

    // species.forEach((speciesType) => {
    //     //     // console.log('species is ', speciesType.name);
    //     const classification = speciesType.name;
    //     return classification;
    // })

    // const tableRow = document.createElement('tr');
    // table.appendChild(tableRow);

    // const tableCell1 = document.createElement('td');
    // tableRow.appendChild(tableCell1);
    // const tableCell2 = document.createElement('td');
    // tableRow.appendChild(tableCell2);
    // const tableCell3 = document.createElement('td');
    // tableRow.appendChild(tableCell3);
    // const tableCell4 = document.createElement('td');
    // tableRow.appendChild(tableCell4);
    // const tableCell5 = document.createElement('td');
    // tableRow.appendChild(tableCell5);
    // const tableCell6 = document.createElement('td');
    // tableRow.appendChild(tableCell6);

    // tableCell1.textContent = characterData.name;
    // tableCell2.textContent = characterData.birth_year;
    // tableCell3.textContent = characterData.height;
    // tableCell4.textContent = characterData.mass;
    // tableCell5.textContent = homeWorld;
    // tableCell6.textContent = classification;

