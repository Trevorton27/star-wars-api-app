const table = document.getElementById("main-table");

window.addEventListener('load', async () => {

    const getPeople = await fetch('https://swapi.dev/api/people/')
        .then((response) => response.json());

    const people = getPeople.results;

    people.forEach((character) => {

        const characterData = character;
        console.log(characterData);
        const getHomeWorld = async (homeworld) => {
            const response = await fetch('https://swapi.dev/api/planets/')
                .then((response) => {
                    console.log('homeworld = ', response);
                    return response.json();
                });

            const homeWorldName = response.results;
                console.log('home world name = ', homeWorldName);
            const world = homeWorldName.map((world) => {
                return world.name;
            });

            return world;
        };

        const getSpecies = async () => {
            const response = await fetch('https://swapi.dev/api/species/')
                .then((response) => {
                    return response.json();
                });

            return response.results;
        }
        const getCharacterData = async (character) => {
            const worldData = await getHomeWorld(character.homeworld);
            const speciesData = await getSpecies(character.species);

            // const world = worldData.map((world) => {
            //     // console.log('homeworld name = ', world.name)

            //     return world;
            // });

            const species = speciesData.map((species) => {
                // console.log('species name = ', species.name);
                return species.name;
            });

            const tableData = {
                name: character.name,
                height: character.height,
                mass: character.mass,
                homeWorld:worldData,
                species: species,
                birthDate: character.birth_year
            };
            return tableData;
        };
        getCharacterData(character).then((tableData) => {
            console.log(tableData);
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

            tableCell1.textContent = tableData.name;
            tableCell2.textContent = tableData.birthDate;
            tableCell3.textContent = tableData.height;
            tableCell4.textContent = tableData.mass;
            tableCell5.textContent = tableData.homeWorld;
            tableCell6.textContent = tableData.species;
        });
    })
});


