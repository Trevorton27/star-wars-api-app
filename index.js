const table = document.getElementById("main-table");

window.addEventListener('load', async () => {

    const getPeople = await fetch('https://swapi.dev/api/people/')
        .then((response) => response.json());

    const people = getPeople.results;

    people.forEach((character) => {

        const characterData = character;
        console.log(characterData);
        const getHomeWorld = async (homeWorld) => {
            const response = await fetch(homeWorld)
                .then((response) => {
                    // console.log('homeworld = ', response);
                    return response.json();
                });
                const worldInfo =  response;
                const worldName = worldInfo.name;
                // console.log(worldName);
                return worldName;
            };
      
        // const getSpecies = async (speciesUrl) => {
        //     const response = await fetch(speciesUrl)
        //         .then((response) => {
        //             return response.json();
        //         });
        //         console.log(response);
        //         const speciesInfo = response.results;
        //         speciesInfo.map((species) => {
        //         // console.log(species);
        //         const speciesName = species.name;
        //         console.log(speciesName);

        //         })
        //     //     
        //     // console.log(speciesInfo);
        // };
        const getCharacterData = async (character) => {
            const world = await getHomeWorld(character.homeworld);
          
            // const species = await getSpecies(speciesUrl);


            const tableData = {
                name: character.name,
                height: character.height,
                mass: character.mass,
                homeWorld: world,
        
                birthDate: character.birth_year
            };
            return tableData;
        };
        getCharacterData(character).then((tableData) => {
            // console.log(tableData);
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
